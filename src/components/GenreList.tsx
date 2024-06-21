import { Heading, List } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageURL from "../services/image-url";
import SkeletonListItem from "./SkeletonListItem";
import anyGenre from "../assets/any-genre.webp";
import GenreItem from "./GenreItem";

interface GenreListProps {
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, loading } = useGenres();
  const skeletons = Array.from({ length: 16 }, (_, i) => (
    <SkeletonListItem key={i} />
  ));

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List>
        {loading && skeletons}
        {!loading && (
          <GenreItem
            genre={null}
            image={anyGenre}
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
        )}
        {data.map((genre) => (
          <GenreItem
            genre={genre}
            image={cropImageURL(genre.image_background)}
            onSelectGenre={onSelectGenre}
            selectedGenre={selectedGenre}
          />
        ))}
      </List>
    </>
  );
};

export default GenreList;
