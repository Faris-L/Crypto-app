import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout/pagelayout";
import Coins from "./Pages/Coins/coins"; 
import CoinPage from "./Pages/CoinPage/CoinPage";


export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Coins />} />
        <Route path="coin/:uuid" element={<CoinPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Route>
    </Routes>
  );
}
