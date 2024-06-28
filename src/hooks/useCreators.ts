import { Browse } from "./useBrowses";
import useData, { Info } from "./useData";

export interface Creator extends Browse {
  image: string;
  positions: Info[];
}

const useCreators = (page: number) =>
  useData<Creator>(
    "/creators",
    {
      params: {
        page: page,
      },
    },
    [page]
  );

export default useCreators;
