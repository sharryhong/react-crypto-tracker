import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
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
  const { isLoading, data: coins } = useQuery<CoinType[]>(
    ["allCoins"],
    fetchCoins
  );

  return (
    <Style.Container>
      <Helmet>
        <title>Crypto Tracker</title>
      </Helmet>
      <Style.Header>
        <Style.Title>Coin</Style.Title>
      </Style.Header>
      {isLoading ? (
        <Loader />
      ) : (
        <Style.CoinList>
          {coins &&
            coins.map((coin) => (
              <Style.Coin key={coin.id}>
                <Link
                  to={`${process.env.PUBLIC_URL}/${coin.id}`}
                  state={{ name: coin.name }}
                >
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
