import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout/pagelayout";
import Coins from "./Pages/Coins/coins"; 
 farisova-grana
import CoinPage from "./Pages/CoinPage/CoinPage";
import Favourites from "./Pages/Favourites/favourites";
import Home from "./Pages/Home/home";
import Profile from "./Pages/Profile/profile";
 main

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
 farisova-grana
        <Route index element={<Coins />} />
        <Route path="coin/:uuid" element={<CoinPage />} />
        <Route path="*" element={<div>Not found</div>} />

        <Route index element={<Home />} />
        <Route path="coins" element={<Coins />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<div>Not found <img src="src\assets\logokripto.png" alt="logo" /></div>} />
      </Route>
    </Routes>
  );
}
