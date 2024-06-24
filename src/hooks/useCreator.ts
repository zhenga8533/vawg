import useData from "./useData";

export interface Creator {
  id: number;
  name: string;
  image: string;
  background_image: string;
}

const useCreator = () =>
  useData<Creator>("/creators", {
    params: {
      page: 1,
    },
  });

export default useCreator;
