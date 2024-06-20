import useData from "./useData";

interface Genre {
  id: number;
  name: string;
}

const useGenres = () => {
  return useData<Genre>("/genres");
};

export default useGenres;
