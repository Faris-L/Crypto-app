import { api } from "./api";

export async function getCoins(limit = 20, offset = 0) {
  const { data } = await api.get("/coins", { params: { limit, offset } });
  return data?.data?.coins ?? [];
}

export async function getCoin(uuid) {
  const { data } = await api.get(`/coin/${uuid}`);
  return data?.data?.coin;
}

export async function getCoinHistory(uuid, period = "7d") {
  const { data } = await api.get(`/coin/${uuid}/history`, {
    params: { timePeriod: period },
  });
  return data?.data?.history ?? [];
}
