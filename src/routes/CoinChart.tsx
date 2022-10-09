import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../apis/coin";
import Chart from "react-apexcharts";
import Loader from "../components/Loader";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface Props {
  coinId: string;
}

interface ChartType {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function CoinChart() {
  const { coinId } = useOutletContext<Props>();
  const { isLoading, data: chartData } = useQuery<ChartType[]>(
    ["chart", coinId],
    () => fetchCoinHistory(`${coinId}`)
  );
  const isDark = useRecoilValue(isDarkAtom);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Chart
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              toolbar: {
                show: false,
              },
            },
            xaxis: {
              axisTicks: {
                show: false,
              },
            },
          }}
          series={[
            {
              data: chartData?.map((price) => {
                return {
                  x: new Date(price.time_close * 1000).toLocaleDateString(),
                  y: [price.open, price.high, price.low, price.close],
                };
              }) as [],
            },
          ]}
          type="candlestick"
          width="500"
        />
      )}
    </>
  );
}

export default CoinChart;
