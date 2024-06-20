import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import cropImageURL from "../services/image-url";

const GenreList = () => {
  const { data } = useGenres();

  const getName = (name: string) => {
    if (name === "Massively Multiplayer") return "MMO";
    return name;
  };

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY={2}>
          <HStack>
            <Image
              src={cropImageURL(genre.image_background)}
              alt={genre.name}
              boxSize="32px"
              borderRadius={8}
            />
            <Text fontSize="lg">{getName(genre.name)}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
