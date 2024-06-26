import { GameQuery } from "../App";
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

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        dates: gameQuery.dates,
        genres: gameQuery.genre?.id,
        ordering: gameQuery.sortOrder,
        page: gameQuery.page,
        parent_platforms: gameQuery.parentPlatform?.id,
        search: gameQuery.searchText,
        stores: gameQuery.store?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
