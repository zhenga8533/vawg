import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: process.env.REACT_APP_RAWG_API_KEY,
  },
});
