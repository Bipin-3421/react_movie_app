import axios from "axios";

const BASE_URL = " https://api.themoviedb.org/3/configuration";

// retrieving the tmdb api token from environment variables

const TMDB_TOKEN = import.meta.env.VITE_APP_TMDB_TOKEN;

// This is authorization header
// this header is used for authentication when making request to the api

const headers = {
  Authorization: "bearer " + TMDB_TOKEN,
};

export const fetchDataFromApi = async () => {
  const data = await axios.get(BASE_URL, {
    headers,
  });

  return data;
};
