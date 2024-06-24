import CardContainer from "../general/CardContainer";
import GenreCard from "./GenreCard";
import { Genre } from "../../hooks/useGenres";
import CardGrid from "../general/CardGrid";

interface GenreGridProps {
  genreData: {
    data: Genre[];
    error: string | null;
    loading: boolean;
  };
}

const GenreGrid = ({ genreData }: GenreGridProps) => {
  const { data, error, loading } = genreData;

  const cards = data.map((genre: Genre) => (
    <CardContainer key={genre.id}>
      <GenreCard genre={genre} />
    </CardContainer>
  ));

  return <CardGrid cards={cards} error={error} loading={loading} />;
};

export default GenreGrid;
