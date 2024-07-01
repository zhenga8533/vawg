import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api/",
  params: {
    key: "616d5f162c6f4008831fae093f1615de",
    page_size: 24,
  },
});
