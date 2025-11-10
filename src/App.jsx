import { Routes, Route } from "react-router-dom";
import PageLayout from "./Components/PageLayout/pagelayout";
import Coins from "./Pages/Coins/coins"; 
import Favourites from "./Pages/Favourites/favourites";
import Home from "./Pages/Home/home";
import Profile from "./Pages/Profile/profile";

export default function App() {
  return (
    <Routes>
      <Route element={<PageLayout />}>
        <Route index element={<Home />} />
        <Route path="coins" element={<Coins />} />
        <Route path="favourites" element={<Favourites />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<div>Not found <img src="src\assets\logokripto.png" alt="logo" /></div>} />
      </Route>
    </Routes>
  );
}
