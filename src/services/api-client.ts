import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: import.meta.env.VITE_RAWG_API_KEY,
    page_size: 20,
  },
});
