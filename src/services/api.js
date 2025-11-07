import axios from "axios";

export const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": "544f2cb58amshecc4cb24fa1dfe5p111669jsn2a7cfb656cd5",
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
  params: {
    referenceCurrencyUuid: "yhjMzLPhuIDl",
  },
});