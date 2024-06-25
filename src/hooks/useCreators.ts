import useData from "./useData";

export interface Creator {
  id: number;
  name: string;
  slug: string;
  image: string;
  image_background: string;
  games_count: number;
  positions: Position[];
  games: Game[];
}

interface Position {
  id: number;
  name: string;
  slug: string;
}

interface Game {
  id: number;
  name: string;
  slug: string;
  added: number;
}

interface CreatorQuery {
  page: number;
}

const useCreators = (creatorQuery: CreatorQuery) =>
  useData<Creator>(
    "/creators",
    {
      params: {
        page: creatorQuery.page,
      },
    },
    [creatorQuery]
  );

export default useCreators;