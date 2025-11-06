import { useQuery } from "@tanstack/react-query";
import { getCoins, getCoin, getCoinHistory } from "../services";

export const useCoins = (limit = 20, offset = 0) =>
  useQuery({
    queryKey: ["coins", limit, offset],
    queryFn: () => getCoins(limit, offset),
  });

export const useCoin = (uuid) =>
  useQuery({
    queryKey: ["coin", uuid],
    queryFn: () => getCoin(uuid),
    enabled: !!uuid,
  });

export const useCoinHistory = (uuid, period = "7d") =>
  useQuery({
    queryKey: ["history", uuid, period],
    queryFn: () => getCoinHistory(uuid, period),
    enabled: !!uuid,
  });
