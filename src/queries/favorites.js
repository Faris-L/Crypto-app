import { useQuery, useQueryClient } from "@tanstack/react-query";

const FAVORITES_KEY = "favorites";

export const getFavorites = () => {
  const stored = localStorage.getItem(FAVORITES_KEY);
  return stored ? JSON.parse(stored) : [];
};

export const setFavorites = (favorites) => {
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
  return favorites;
};

export const useFavorites = () => {
  return useQuery({
    queryKey: ["favorites"],
    queryFn: getFavorites,
    staleTime: Infinity,
  });
};

export const useToggleFavorite = () => {
  const queryClient = useQueryClient();

  return (coin) => {
    const current = getFavorites();
    const exists = current.find((f) => f.id === coin.id);
    let updated;

    if (exists) {
      updated = current.filter((f) => f.id !== coin.id);
    } else {
      updated = [...current, coin];
    }

    setFavorites(updated);
    queryClient.setQueryData(["favorites"], updated);
    return updated;
  };
};
