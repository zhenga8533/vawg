import {
  Box,
  Card,
  CardBody,
  HStack,
  Heading,
  Icon,
  Image,
  Text,
} from "@chakra-ui/react";
import cropImageURL from "../../services/image-url";
import { IoPersonOutline } from "react-icons/io5";
import { commafy } from "../../services/formatting";
import { Genre } from "../../hooks/useGenres";

interface GenreCardProps {
  genre: Genre;
}

const GenreCard = ({ genre }: GenreCardProps) => {
  return (
    <Card>
      <Image src={cropImageURL(genre.image_background)} alt={genre.name} />
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box marginBottom={3} textAlign="center">
          <Heading fontSize="2xl">{genre.name}</Heading>
        </Box>
        <Box>
          <HStack justifyContent="space-between">
            <Text fontWeight="bold">Games</Text>
            <Text color="gray">{commafy(genre.games_count)}</Text>
          </HStack>
          <hr />
          {genre.games.map((game) => (
            <HStack justifyContent="space-between" key={game.id}>
              <Text
                key={game.id}
                textOverflow="ellipsis"
                overflow="hidden"
                whiteSpace="nowrap"
              >
                {game.name}
              </Text>
              <HStack spacing={1}>
                <Text color="gray">{commafy(game.added)}</Text>
                <Icon as={IoPersonOutline} />
              </HStack>
            </HStack>
          ))}
        </Box>
      </CardBody>
    </Card>
  );
};

export default GenreCard;
