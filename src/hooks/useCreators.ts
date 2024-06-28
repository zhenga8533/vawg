import { Browse } from "./useBrowses";
import useData from "./useData";

export interface Creator extends Browse {
  image: string;
  positions: Position[];
}

interface Position {
  id: number;
  name: string;
  slug: string;
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
