import genres from "../json/genres.json";
import parents from "../json/parents.json";
import platforms from "../json/platforms.json";
import stores from "../json/stores.json";
import tags from "../json/tags.json";
import useData, { Info } from "./useData";

export interface Item extends Info {
  image_background: string;
}

const useItems = (endpoint: string) => {
  const presets: { [key: string]: any } = {
    genres,
    parents,
    platforms,
    stores,
    tags,
  };

  const end = endpoint.split("/").pop();
  if (end && presets[end])
    return { count: presets[end].length, error: "", loading: false, results: presets[end].results };

  return useData<Item>(endpoint);
};

export default useItems;
