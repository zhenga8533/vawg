import { Button, HStack, Image, List, ListItem } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import cropImageURL from "../services/image-url";
import SkeletonListItem from "./SkeletonListItem";

interface GenreListProps {
  onSelectGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({ selectedGenre, onSelectGenre }: GenreListProps) => {
  const { data, loading } = useGenres();
  const skeletons = Array.from({ length: 16 }, (_, i) => (
    <SkeletonListItem key={i} />
  ));

  const getName = (name: string) => {
    if (name === "Massively Multiplayer") return "MMO";
    return name;
  };

  return (
    <List>
      {loading && skeletons}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={cropImageURL(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius={8}
            />
            <Button
              fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              fontSize="lg"
              onClick={() => onSelectGenre(genre)}
              textColor={selectedGenre?.id === genre.id ? "blue.500" : ""}
              variant="link"
            >
              {getName(genre.name)}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
