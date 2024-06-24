import useData from "./useData";

export interface Creator {
  id: number;
  name: string;
  image: string;
  image_background: string;
}

const useCreators = () =>
  useData<Creator>("/creators", {
    params: {
      page: 1,
    },
  });

export default useCreators;
