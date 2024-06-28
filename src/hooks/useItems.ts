import genres from "../json/genres.json";
import platforms from "../json/platforms.json";
import stores from "../json/stores.json";
import tags from "../json/tags.json";
import useData from "./useData";

export interface Item {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}

const useItems = (endpoint: string) => {
  const presets: { [key: string]: any } = {
    genres,
    platforms,
    stores,
    tags,
  };

  if (presets[endpoint])
    return { count: presets[endpoint].length, error: "", loading: false, results: presets[endpoint].results };

  return useData<Item>(endpoint);
};

export default useItems;
