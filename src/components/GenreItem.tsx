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
  return (
    <ListItem paddingY={2}>
      <HStack>
        <Image
          alt={genre?.name ?? "Any Genre"}
          boxSize="32px"
          borderRadius={8}
          objectFit={"cover"}
          src={image}
        />
        <Button
          {...getStyle(genre?.id, selectedGenre?.id)}
          onClick={() => onSelectGenre(genre)}
          textAlign={"left"}
          variant="link"
          whiteSpace={"normal"}
        >
          {genre?.name ?? "Any Genre"}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default GenreItem;
