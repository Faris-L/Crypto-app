import { useState } from "react";
import { Table, Th, Td, Tr, Logo, NameBox, Name, Symbol, Price, Volume, MarketCap, ChartBox, Actions, FavoriteBtn, DetailsBtn } from "../../Components/Table/table.styled";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { notifications } from "@mantine/notifications";
import { Sparklines, SparklinesLine } from "react-sparklines";
import emptyFolder from "../../assets/emptyFavorites.png";
import { GoToCoinsBtn } from "./favourites.styled";
import CalculatorModal from "../../Components/Kalkulator/kalkulator";

const getFavorites = () => JSON.parse(localStorage.getItem("favorites")) || [];

const Favorites = () => {
  const queryClient = useQueryClient();
  const [calcCoin, setCalcCoin] = useState(null);  

  const toggleFavoriteMutation = useMutation({
    mutationFn: (coin) => {
      const current = getFavorites();
      const isFavorite = current.some((fav) => fav.uuid === coin.uuid);
      let updated;

      if (isFavorite) {
        updated = current.filter((fav) => fav.uuid !== coin.uuid);
        notifications.show({
          title: "Removed from favorites",
          message: `${coin.name} has been removed.`,
          color: "red",
        });
      } else {
        updated = [...current, coin];
        notifications.show({
          title: "Added to favorites",
          message: `${coin.name} was added to your favorites!`,
          color: "teal",
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

  if (favorites.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "5rem" }}>
        <img
          src={emptyFolder}
          alt="Empty Folder"
          style={{ width: "220px", opacity: 0.8 }}
        />
        <p style={{ fontSize: "1.1rem", marginTop: "1rem" }}>
          You haven't added any coin to your favourite list, please add some.
        </p>
        <GoToCoinsBtn to="/coins">Go to Coins</GoToCoinsBtn>
      </div>
    );
  }

  return (
    <Table>
      <thead>
        <Tr>
          <Th>Name</Th>
          <Th>Price</Th>
          <Th>24h Volume</Th>
          <Th>MarketCap</Th>
          <Th>Chart</Th>
          <Th></Th>
        </Tr>
      </thead>

      <tbody>
        {favorites.map((coin) => (
          <Tr key={coin.uuid}>
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
                  style={{ color: "red" }}
                >
                  ❤
                </FavoriteBtn>
                <DetailsBtn>?</DetailsBtn>
              </Actions>
            </Td>
    <>
      <Table>
        <thead>
          <Tr>
            <Th>Name</Th>
            <Th>Price</Th>
            <Th>24h Volume</Th>
            <Th>MarketCap</Th>
            <Th>Chart</Th>
            <Th></Th>
          </Tr>
        </thead>

        <tbody>
          {favorites.map((coin) => (
            <Tr key={coin.uuid}>
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
                    style={{ color: "red" }}
                  >
                    ❤
                  </FavoriteBtn>

                  <DetailsBtn
                    onClick={() => setCalcCoin(coin)}
                    title="Open calculator"
                  >
                    🧮
                  </DetailsBtn>
                </Actions>
              </Td>
            </Tr>
          ))}
        </tbody>
      </Table>
      <CalculatorModal
        open={!!calcCoin}
        coin={calcCoin}
        onClose={() => setCalcCoin(null)}
      />
    </>
  );
};

export default Favorites;
