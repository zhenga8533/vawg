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

interface BrowseQuery {
  page: number;
}

const useBrowses = (browseQuery: BrowseQuery, endpoint: string) =>
  useData<Browse>(
    endpoint,
    {
      params: {
        page: browseQuery.page,
      },
    },
    [browseQuery]
  );

export default useBrowses;
