import axios from "axios";

const weatherFetch = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
});

const geoLocationFetch = axios.create({
  baseURL: "https://api.openweathermap.org/geo/1.0",
});
export { weatherFetch, geoLocationFetch };
