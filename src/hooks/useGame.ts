import useData from "./useData";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

interface Screenshot {
  id: number;
  image: string;
}

export interface Game {
  id: number;
  name: string;
  slug: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating: number;
  rating_top: number;
  short_screenshots: Screenshot[];
}

const useGame = (slug: string) => useData<Game>(`/games/${slug}`);

export default useGame;
