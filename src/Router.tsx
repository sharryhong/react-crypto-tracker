import { BrowserRouter, Routes, Route } from "react-router-dom";
import Coin from "./routes/Coin";
import CoinChart from "./routes/CoinChart";
import CoinPrice from "./routes/CoinPrice";
import Coins from "./routes/Coins";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`${process.env.PUBLIC_URL}/`} element={<Coins />} />
        <Route path={`${process.env.PUBLIC_URL}/:coinId`} element={<Coin />}>
          <Route path="price" element={<CoinPrice />} />
          <Route path="chart" element={<CoinChart />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
