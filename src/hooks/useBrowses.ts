import useData from "./useData";

export interface Browse {
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

const useBrowses = (endpoint: string) => {
  return useData<Browse>(endpoint);
};

export default useBrowses;
