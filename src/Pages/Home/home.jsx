import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../../services/coins"; 
import CoinsTable from "../../Components/Table/Table";
import { HomeWrapper, HeaderSpace, HeroSection } from "./home.styled";
import SearchBar from "../../Components/SearchBar/search";
import homeImg from "../../assets/logokripto.png"

const Home = () => {
  const [search, setSearch] = useState("");

  const { data, isLoading, isError } = useQuery({
    queryKey: ["homeCoins"],
    queryFn: () => getCoins(10, 0),
    staleTime: 300000,
  });

  const coins = data?.coins || [];

  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load coins.</div>;

  return (
    <HomeWrapper>
      <HeaderSpace />
      <HeroSection>
        <img src={homeImg} />
         <div className="hero-text">
         <h1>Crypto App</h1>
         <p>The definitive way of tracking cryptocurrency online</p>
         </div>
        </HeroSection>
      <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      <CoinsTable coins={filtered} />
    </HomeWrapper>
  );
};

export default Home;