import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout/pagelayout";
import Home from "./Pages/Home/home";
import Coins from "./Pages/Coins/coins";
import CoinPage from "./Pages/CoinPage/CoinPage";
import Favourites from "./Pages/Favourites/favourites";
import Profile from "./Pages/Profile/profile";
import Exchanges from "./Pages/Exchanges/exchanges";
import AboutUs from "./Pages/Aboutus/aboutus";

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="/*" element={<div>Not found <img src="src\assets\logokripto.png" alt="logo" /></div>} />
        <Route path="/coins" element={<Coins />} />
        <Route path="/coin/:uuid" element={<CoinPage />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/exchanges" element={<Exchanges />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Route>
    </Routes>
  );
}
