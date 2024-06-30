import { Box, Grid, HStack, Text } from "@chakra-ui/react";
import { GameData } from "../../../hooks/useGame";
import { formatDate } from "../../../services/formatting";

interface GameInfoProps {
  game: GameData;
}

const GameInfo = ({ game }: GameInfoProps) => {
  return (
    <>
      <Grid gap={4} marginTop={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
        <Box>
          <Text color="gray">Platforms</Text>
          <HStack wrap="wrap">
            {game.platforms.map((platform) => (
              <Text key={platform.platform.id}>{platform.platform.name}</Text>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Genres</Text>
          <HStack wrap="wrap">
            {game.genres.map((genre) => (
              <Text key={genre.id}>{genre.name}</Text>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Release Date</Text>
          <Text>{formatDate(game.released)}</Text>
        </Box>
        <Box>
          <Text color="gray">Developers</Text>
          <HStack wrap="wrap">
            {game.developers.map((developer) => (
              <Text key={developer.id}>{developer.name}</Text>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Publishers</Text>
          <HStack wrap="wrap">
            {game.publishers.map((publisher) => (
              <Text key={publisher.id}>{publisher.name}</Text>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Age Rating</Text>
          <Text>{game.esrb_rating.name}</Text>
        </Box>
      </Grid>

      <Box mt={4}>
        <Text color="gray">Tags</Text>
        <HStack wrap="wrap">
          {game.tags.map((tag) => (
            <Text key={tag.id}>{tag.name}</Text>
          ))}
        </HStack>
      </Box>

      <Box mt={4}>
        <Text color="gray">Website</Text>
        <Text>{game.website}</Text>
      </Box>
    </>
  );
};

export default GameInfo;
