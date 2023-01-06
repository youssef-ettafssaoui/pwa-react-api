import axios from "axios";

const URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = "f33a484cf794d08d0148764789aaba32";

export const fetchWeather = async (query) => {
  const { data } = await axios.get(URL, {
    params: {
      q: query, // q is set to be the query
      units: "metric", // for the type as metric
      APPID: API_KEY, //set to the API key
    },
  });

  return data;
};
