import {
  Table,
  Th,
  Td,
  Tr,
  Rank,
  Logo,
  NameBox,
  Name,
  Symbol,
  Price,
  Volume,
  MarketCap,
  ChartBox,
  Actions,
  FavoriteBtn,
  DetailsBtn,
} from "./table.styled";

import { Sparklines, SparklinesLine } from "react-sparklines";
import { useNavigate } from "react-router-dom";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

function toNum(x) {
  const n = Number(x);
  return Number.isFinite(n) ? n : 0;
}

const CoinsTable = ({ coins, onOpenCalculator }) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();


  const getFavorites = () => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  };
  if (!queryClient.getQueryData(["favorites"])) {
    queryClient.setQueryData(["favorites"], getFavorites());
  }

  const toggleFavoriteMutation = useMutation({
    mutationFn: (coin) => {
      const current = queryClient.getQueryData(["favorites"]) || getFavorites();
      const isFavorite = current.some((fav) => fav.uuid === coin.uuid);
      let updated;

      if (isFavorite) {
        updated = current.filter((fav) => fav.uuid !== coin.uuid);
        notifications.show({
          title: "Removed from favorites",
          message: `${coin.name} has been removed from your favorites.`,
          color: "red",
          radius: "md",
          withCloseButton: false,
          autoClose: 2000,
        });
      } else {
        updated = [...current, coin];
        notifications.show({
          title: "Added to favorites",
          message: `${coin.name} was added to your favorites!`,
          color: "teal",
          radius: "md",
          withCloseButton: false,
          autoClose: 2000,
        });
      }

      localStorage.setItem("favorites", JSON.stringify(updated));
      return updated;
    },
    onSuccess: (updatedFavorites) => {
      queryClient.setQueryData(["favorites"], updatedFavorites);
    },
  });

  const favorites = queryClient.getQueryData(["favorites"]) || [];

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Rank</Th>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>24h Volume</Th>
          <Th>MarketCap</Th>
          <Th>Chart</Th>
          <Th></Th>
        </Tr>
      </thead>

      <tbody>
        {coins.map((coin) => {
          const price = toNum(coin.price);
          const vol24 = toNum(coin["24hVolume"]);
          const mcap = toNum(coin.marketCap);
          const spark = Array.isArray(coin.sparkline)
            ? coin.sparkline.map(Number).filter(Number.isFinite)
            : [];

          const handleRowClick = () => navigate(`/coin/${coin.uuid}`);

          return (
            <Tr key={coin.uuid} onClick={handleRowClick}>
              <Td>
                <Rank>{coin.rank}</Rank>
              </Td>

              <Td>
                <NameBox>
                  <Logo src={coin.iconUrl} alt={coin.name} />
                  <div>
                    <Name>{coin.name}</Name>
                    <Symbol>{coin.symbol}</Symbol>
                  </div>
                </NameBox>
              </Td>

              <Td>
                <Price>${price.toLocaleString()}</Price>
              </Td>

              <Td>
                <Volume>${vol24.toLocaleString()}</Volume>
              </Td>

              <Td>
                <MarketCap>${mcap.toLocaleString()}</MarketCap>
              </Td>

              <Td>
                <ChartBox>
                  <Sparklines data={spark.length ? spark : [0, 0, 0]}>
                    <SparklinesLine style={{ strokeWidth: 2 }} />
                  </Sparklines>
                </ChartBox>
              </Td>

              <Td>
                <Actions>
                  <FavoriteBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleFavoriteMutation.mutate(coin);
                    }}
                    style={{
                      color: favorites.some((fav) => fav.uuid === coin.uuid)
                        ? "red"
                        : "#e66",
                    }}
                    aria-label="Toggle favorite"
                    title="Toggle favorite"
                  >
                    ❤
                  </FavoriteBtn>

                  <DetailsBtn
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenCalculator?.(coin); 
                    }}
                    aria-label="Open calculator"
                    title="Open calculator"
                  >
                    🧮
                  </DetailsBtn>
                </Actions>
              </Td>
            </Tr>
          );
        })}
      </tbody>
    </Table>
  );
};

export default CoinsTable;
