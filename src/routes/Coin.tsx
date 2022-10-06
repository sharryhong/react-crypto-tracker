import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import Loader from "../components/Loader";
import * as Style from "./CoinsStyle";
import * as CoinStyle from "./CoinStyle";

export interface InfoType {
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

  const [info, setInfo] = useState<InfoType>();
  const [price, setPrice] = useState<PriceType>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const infoData = await (
        await fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      ).json();
      const priceData = await (
        await fetch(`https://api.coinpaprika.com/v1/tickers/${coinId}`)
      ).json();
      setInfo(infoData);
      setPrice(priceData);
      setLoading(false);
    })();
  }, [coinId]);

  return (
    <Style.Container>
      <Style.Header>
        <Style.Title>{state?.name || info?.name}</Style.Title>
      </Style.Header>
      {loading ? (
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
              <CoinStyle.ItemLabel>Open Source</CoinStyle.ItemLabel>
              <span>{info?.open_source}</span>
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
        </>
      )}
    </Style.Container>
  );
}

export default Coin;
