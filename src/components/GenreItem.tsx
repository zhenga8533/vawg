import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import { Genre } from "../hooks/useGenres";
import getStyle from "../services/select-style";

interface GenreItemProps {
  genre: Genre | null;
  image: string;
  onSelectGenre: (genre: Genre | null) => void;
  selectedGenre: Genre | null;
}

const GenreItem = ({
  genre,
  image,
  onSelectGenre,
  selectedGenre,
}: GenreItemProps) => {
  const getName = (name: string) => {
    if (name === "Massively Multiplayer") return "MMO";
    return name;
  };

  return (
    <ListItem key={genre?.id ?? 0} paddingY={2}>
      <HStack>
        <Image
          src={image}
          alt={genre?.name ?? "Any Genre"}
          boxSize="32px"
          borderRadius={8}
        />
        <Button
          {...getStyle(genre?.id, selectedGenre?.id)}
          fontSize="lg"
          onClick={() => onSelectGenre(genre)}
          variant="link"
        >
          {getName(genre?.name ?? "Any Genre")}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;
