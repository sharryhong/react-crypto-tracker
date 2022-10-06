import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "../components/Loader";
import * as Style from "./CoinsStyle";

interface CoinType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<CoinType[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 100));
      setLoading(false);
    })();
  }, []);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Coin</Style.Title>
      </Style.Header>
      {loading ? (
        <Loader />
      ) : (
        <Style.CoinList>
          {coins.map((coin) => (
            <Style.Coin key={coin.id}>
              <Link to={`/${coin.id}`} state={{ name: coin.name }}>
                <Style.Icon
                  src={`https://coinicons-api.vercel.app/api/icon/${coin.symbol.toLowerCase()}`}
                  alt={coin.name}
                />
                {coin.name} &rarr;
              </Link>
            </Style.Coin>
          ))}
        </Style.CoinList>
      )}
    </Style.Container>
  );
}

export default Coins;
