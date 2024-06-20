import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "27f96af9124242689202cb8bd24c38d1",
  },
});
