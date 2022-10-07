import { useEffect } from "react";
import { useQuery } from "react-query";
import {
  Link,
  Outlet,
  useLocation,
  useMatch,
  useParams,
  useNavigate,
} from "react-router-dom";
import { fetchCoinInfo, fetchCoinPrice } from "../apis/coin";
import Loader from "../components/Loader";
import * as Style from "./CoinsStyle";
import * as CoinStyle from "./CoinStyle";

interface InfoType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
  logo: string;
  description: string;
  message: string;
  open_source: boolean;
  started_at: Date;
  development_status: string;
  hardware_wallet: boolean;
  proof_type: string;
  org_structure: string;
  hash_algorithm: string;
  whitepaper: {
    link: string;
    thumbnail: string;
  };
  first_data_at: Date;
  last_data_at: Date;
}

interface PriceType {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: Date;
  last_updated: Date;
  quotes: {
    USD: {
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_15m: number;
      percent_change_30m: number;
      percent_change_1h: number;
      percent_change_6h: number;
      percent_change_12h: number;
      percent_change_24h: number;
      percent_change_7d: number;
      percent_change_30d: number;
      percent_change_1y: number;
      ath_price: number;
      ath_date: Date;
      percent_from_price_ath: number;
    };
  };
}

function Coin() {
  const { coinId } = useParams();
  const { state } = useLocation();
  const priceMatch = useMatch(`${process.env.PUBLIC_URL}/:coinId/price`);
  const chartMatch = useMatch(`${process.env.PUBLIC_URL}/:coinId/chart`);
  const navigate = useNavigate();

  useEffect(() => {
    navigate(`${process.env.PUBLIC_URL}/${coinId}/chart`);
  }, [coinId, navigate]);

  const { isLoading: isLoadingInfo, data: info } = useQuery<InfoType>(
    ["info", coinId],
    () => fetchCoinInfo(`${coinId}`)
  );
  const { isLoading: isLoadingPrice, data: price } = useQuery<PriceType>(
    ["price", coinId],
    () => fetchCoinPrice(`${coinId}`)
  );

  return (
    <Style.Container>
      <Style.Header>
        <Style.BackButton to={`${process.env.PUBLIC_URL}`}>
          &lsaquo;Home
        </Style.BackButton>
        <Style.Title>{state?.name || info?.name}</Style.Title>
      </Style.Header>
      {isLoadingInfo || isLoadingPrice ? (
        <Loader />
      ) : (
        <>
          <CoinStyle.Overview>
            <CoinStyle.OverviewItem>
              <CoinStyle.ItemLabel>Rank</CoinStyle.ItemLabel>
              <span>{info?.rank}</span>
            </CoinStyle.OverviewItem>
            <CoinStyle.OverviewItem>
              <CoinStyle.ItemLabel>Symbol</CoinStyle.ItemLabel>
              <span>{info?.symbol}</span>
            </CoinStyle.OverviewItem>
            <CoinStyle.OverviewItem>
              <CoinStyle.ItemLabel>Price</CoinStyle.ItemLabel>
              <span>{price?.quotes.USD.price}</span>
            </CoinStyle.OverviewItem>
          </CoinStyle.Overview>
          <CoinStyle.Description>{info?.description}</CoinStyle.Description>
          <CoinStyle.Overview>
            <CoinStyle.OverviewItem>
              <CoinStyle.ItemLabel>Total Supply</CoinStyle.ItemLabel>
              <span>{price?.total_supply}</span>
            </CoinStyle.OverviewItem>
            <CoinStyle.OverviewItem>
              <CoinStyle.ItemLabel>Max Supply</CoinStyle.ItemLabel>
              <span>{price?.max_supply}</span>
            </CoinStyle.OverviewItem>
          </CoinStyle.Overview>

          <CoinStyle.Tabs>
            <CoinStyle.Tab isActive={chartMatch !== null}>
              <Link to={`${process.env.PUBLIC_URL}/${coinId}/chart`}>
                Chart
              </Link>
            </CoinStyle.Tab>
            <CoinStyle.Tab isActive={priceMatch !== null}>
              <Link to={`${process.env.PUBLIC_URL}/${coinId}/price`}>
                Price
              </Link>
            </CoinStyle.Tab>
          </CoinStyle.Tabs>

          <Outlet context={{ coinId }} />
        </>
      )}
    </Style.Container>
  );
}

export default Coin;
