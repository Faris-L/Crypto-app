
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { Loader } from "@mantine/core"; 
import { getCoins } from "../../services/coins";
import CoinsTable from "../../Components/Table/Table";
import CalculatorModal from "../../Components/Kalkulator/kalkulator";
import { HomeWrapper, HeaderSpace, HeroSection } from "./home.styled";
import SearchBar from "../../Components/SearchBar/search";
import homeImg from "../../assets/logokripto.png";

export default function Home() {
  
  const [search, setSearch] = useState("");
  const [calcCoin, setCalcCoin] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["homeCoins"],
    queryFn: () => getCoins(10, 0),
    staleTime: 300_000,
  });

  const coins = data?.coins || [];
  const filtered = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading)
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          marginTop: "80px",
        }}
      >
        <Loader color="blue" size="lg" />
      </div>
    );

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

      <CoinsTable
        coins={filtered}
        onOpenCalculator={(coin) => setCalcCoin(coin)}
      />

      <CalculatorModal
        open={!!calcCoin}
        coin={calcCoin}
        onClose={() => setCalcCoin(null)}
      />
    </HomeWrapper>
  );
};


