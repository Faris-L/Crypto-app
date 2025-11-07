import { useEffect, useMemo, useState } from "react";
import PaginationBar from "../../Components/Pagination/Pagination";
import { useCoins } from "../../queries/coins";
import Search from "../../Components/SearchBar/search";
import CoinsTable from "../../Components/Table/Table";

const LIMIT = 12;

const Coins = () => {
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState("");

  const offset = (page - 1) * LIMIT;

  const { data, isLoading } = useCoins(LIMIT, offset);
  const coins = data?.coins ?? [];
  const stats = data?.stats;

  const totalPages = Math.max(1, Math.ceil((stats?.total || 0) / LIMIT));
 
  useEffect(() => {
    setPage(1);
  }, [query]);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return coins;           
    return coins.filter(
      (c) =>
        c.name?.toLowerCase().includes(q) ||
        c.symbol?.toLowerCase().includes(q)
    );
  }, [coins, query]);

  if (isLoading) return <p>Loading...</p>;

  return (
    <div>
      <Search value={query} onChange={setQuery} />
      <CoinsTable coins={filtered} />
      <PaginationBar total={totalPages} page={page} onChange={setPage} />
    </div>
  );
};

export default Coins;
