// src/Pages/Home/home.jsx
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getCoins } from "../../services/coins";
import CoinsTable from "../../Components/Table/Table";
import CalculatorModal from "../../Components/Kalkulator/kalkulator";
import { HomeWrapper, HeaderSpace, HeroSection } from "./home.styled";
import SearchBar from "../../Components/SearchBar/search";
import homeImg from "../../assets/logokripto.png";

export default function Home() {
  // 1) HOOKS NA VRHU – bez uslovnih grananja
  const [search, setSearch] = useState("");
  const [calcCoin, setCalcCoin] = useState(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["homeCoins"],
    queryFn: () => getCoins(10, 0),
    staleTime: 300_000,
  });

  // 2) Ovo ide PRE ranih return-ova
  const coins = data?.coins ?? [];
  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return coins;
    return coins.filter((c) => c.name?.toLowerCase().includes(q));
  }, [coins, search]);

  // 3) Tek sada rani return-ovi
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Failed to load coins.</div>;

  // 4) Render
  return (
    <HomeWrapper>
      <HeaderSpace />
      <HeroSection>
        <img src={homeImg} alt="Crypto App" />
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
}
