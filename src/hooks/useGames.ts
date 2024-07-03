import { GameQuery } from "../App";
import useData from "./useData";
import { Game } from "./useGame";

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        creators: gameQuery.creator?.id,
        dates: gameQuery.dates,
        developers: gameQuery.developer?.id,
        genres: gameQuery.genre?.id,
        ordering: gameQuery.sortOrder,
        page: gameQuery.page,
        parent_platforms: gameQuery.parentPlatform?.id,
        platforms: gameQuery.platform?.id,
        publishers: gameQuery.publisher?.id,
        search: gameQuery.searchText,
        stores: gameQuery.store?.id,
        tags: gameQuery.tag?.id,
      },
    },
    [gameQuery]
  );

export default useGames;
