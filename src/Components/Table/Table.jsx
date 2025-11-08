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
  DetailsBtn
} from "./table.styled";
import { useNavigate } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
// import { useFavorites, useToggleFavorite } from "../../queries/favorites";
import { useQueryClient , useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";

const CoinsTable = ({ coins }) => {
   const queryClient = useQueryClient();

const getFavorites = () => {
  const saved = localStorage.getItem("favorites");
  return saved ? JSON.parse(saved) : [];
};

const toggleFavoriteMutation = useMutation({
  mutationFn: (coin) => {
    const current = getFavorites();
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
  autoClose: 2500,
});

    } else {
      updated = [...current, coin];
  notifications.show({
  title: "Added to favorites",
  message: `${coin.name} was added to your favorites!`,
  color: "teal",
  radius: "md",
  withCloseButton: false,
  autoClose: 2500,
});

    }

    localStorage.setItem("favorites", JSON.stringify(updated));
    return updated;
  },

  onSuccess: (updatedFavorites) => {
    queryClient.setQueryData(["favorites"], updatedFavorites);
  },
});

const favorites = queryClient.getQueryData(["favorites"]) || getFavorites();


  const navigate = useNavigate();
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
        {coins.map((coin) => (
          <Tr key={coin.uuid} onClick={() => navigate(`/coin/${coin.uuid}`)}>
            <Td>
              <Rank>{coin.rank}</Rank>
            </Td>

            <Td>
              <NameBox>
                <Logo src={coin.iconUrl} />
                <div>
                  <Name>{coin.name}</Name>
                  <Symbol>{coin.symbol}</Symbol>
                </div>
              </NameBox>
            </Td>

            <Td>
              <Price>${Number(coin.price).toLocaleString()}</Price>
            </Td>

            <Td>
              <Volume>${Number(coin["24hVolume"]).toLocaleString()}</Volume>
            </Td>

            <Td>
              <MarketCap>${Number(coin.marketCap).toLocaleString()}</MarketCap>
            </Td>

            <Td>
            <ChartBox>
                <Sparklines data={coin.sparkline?.map(Number)}>
                <SparklinesLine style={{ strokeWidth: 2 }} />
                </Sparklines>
            </ChartBox>
            </Td>

            <Td>
              <Actions>
                <FavoriteBtn
  onClick={() => toggleFavoriteMutation.mutate(coin)}
  style={{
    color: favorites.some((fav) => fav.uuid === coin.uuid) ? "red" : "#e66",
  }}
>
  ❤
</FavoriteBtn>

                <DetailsBtn>🔍</DetailsBtn>
              </Actions>
            </Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CoinsTable;
