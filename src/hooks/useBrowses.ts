import useData, { Info } from "./useData";
import { Item } from "./useItems";

export interface Browse extends Item {
  games_count: number;
  games: Game[];
}

interface Game extends Info {
  added: number;
}

const useBrowses = (page: number, endpoint: string) =>
  useData<Browse>(
    endpoint,
    {
      params: {
        page: page,
      },
    },
    [page]
  );

export default useBrowses;
