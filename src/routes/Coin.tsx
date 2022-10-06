import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import * as Style from "./CoinsStyle";

interface CoinType {
  id: string;
  name: string;
  description: string;
}

function Coin() {
  const { coinId } = useParams();
  const {
    state: { name },
  } = useLocation();

  const [coin, setCoin] = useState<CoinType>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    (async () => {
      const response = await fetch(
        `https://api.coinpaprika.com/v1/coins/${coinId}`
      );
      const json = await response.json();
      setCoin(json);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>{name || coin?.name}</Style.Title>
      </Style.Header>
      {loading ? <Loader /> : <p>{coin?.description}</p>}
    </Style.Container>
  );
}

export default Coin;
