import useData from "./useData";

export interface Item {
  id: number;
  name: string;
  slug: string;
  games_count: number;
  image_background: string;
  games: Game[];
}

interface Game {
  id: number;
  slug: string;
  name: string;
  added: number;
}

const useItems = (endpoint: string) => {
  return useData<Item>(endpoint);
};

export default useItems;
