import axios from "axios";

const RAPID_API_KEY = "YOUR_API_KEY_HERE";   

export const api = axios.create({
  baseURL: "https://coinranking1.p.rapidapi.com",
  headers: {
    "X-RapidAPI-Key": RAPID_API_KEY,
    "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
  },
  params: { referenceCurrencyUuid: "yhjMzLPhuIDl" }, 
});
