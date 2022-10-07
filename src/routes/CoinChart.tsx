import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistory } from "../apis/coin";
import Chart from "react-apexcharts";
import Loader from "../components/Loader";

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

const chartOption = {
  chart: {
    id: "candlestick",
  },
};

function CoinChart() {
  const { coinId } = useOutletContext<Props>();
  const { isLoading, data: chartData } = useQuery<ChartType[]>(
    ["chart", coinId],
    () => fetchCoinHistory(`${coinId}`)
  );

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <Chart
          options={chartOption}
          series={[
            {
              data: chartData?.map((price) => {
                const time = new Date(price.time_close);
                const hours = ("0" + time.getHours()).slice(-2);
                const minutes = ("0" + time.getMinutes()).slice(-2);
                const seconds = ("0" + time.getSeconds()).slice(-2);
                const timeString = hours + ":" + minutes + ":" + seconds;

                return {
                  x: timeString,
                  y: [price.open, price.close, price.low, price.high],
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
