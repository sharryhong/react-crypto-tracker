import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchCoins } from "../apis/coin";
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
  const { isLoading, data } = useQuery<CoinType[]>(["allCoins"], fetchCoins);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>Coin</Style.Title>
      </Style.Header>
      {isLoading ? (
        <Loader />
      ) : (
        <Style.CoinList>
          {data &&
            data.map((coin) => (
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
