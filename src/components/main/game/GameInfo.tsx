import { Box, Button, Grid, HStack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { GameData } from "../../../hooks/useGame";
import { formatDate } from "../../../services/formatting";

interface GameInfoProps {
  game: GameData;
}

const GameInfo = ({ game }: GameInfoProps) => {
  const navigate = useNavigate();

  return (
    <>
      <Grid gap={4} mt={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
        <Box>
          <Text color="gray">Platforms</Text>
          <HStack wrap="wrap">
            {game.platforms.map((platform, index) => (
              <HStack key={platform.platform.id} spacing={0}>
                <Button onClick={() => navigate(`/platforms/${platform.platform.slug}`)} variant="link">
                  {platform.platform.name}
                </Button>
                <Text>{index < game.platforms.length - 1 ? ", " : ""}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Genres</Text>
          <HStack wrap="wrap">
            {game.genres.map((genre, index) => (
              <HStack key={genre.id} spacing={0}>
                <Button onClick={() => navigate(`/genres/${genre.slug}`)} variant="link">
                  {genre.name}
                </Button>
                <Text>{index < game.genres.length - 1 ? ", " : ""}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Release Date</Text>
          <Text>{game.tba ? "TBA" : formatDate(game.released)}</Text>
        </Box>
        <Box>
          <Text color="gray">Developers</Text>
          <HStack wrap="wrap">
            {game.developers.map((developer, index) => (
              <HStack key={developer.id} spacing={0}>
                <Button onClick={() => navigate(`/developers/${developer.slug}`)} variant="link">
                  {developer.name}
                </Button>
                <Text>{index < game.developers.length - 1 ? ", " : ""}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Publishers</Text>
          <HStack wrap="wrap">
            {game.publishers.map((publisher, index) => (
              <HStack key={publisher.id} spacing={0}>
                <Button onClick={() => navigate(`/publishers/${publisher.slug}`)} variant="link">
                  {publisher.name}
                </Button>
                <Text>{index < game.publishers.length - 1 ? ", " : ""}</Text>
              </HStack>
            ))}
          </HStack>
        </Box>
        <Box>
          <Text color="gray">Age Rating</Text>
          <Text>{game.esrb_rating?.name ?? "Not Rated"}</Text>
        </Box>
      </Grid>

      <Box mt={4}>
        <Text color="gray">Tags</Text>
        <HStack wrap="wrap">
          {game.tags.map((tag, index) => (
            <HStack key={tag.id} spacing={0}>
              <Button key={tag.id} onClick={() => navigate(`/tags/${tag.slug}`)} variant="link">
                {tag.name}
              </Button>
              <Text>{index < game.tags.length - 1 ? ", " : ""}</Text>
            </HStack>
          ))}
        </HStack>
      </Box>

      <Box mt={4}>
        <Text color="gray">Website</Text>
        <Button as="a" href={game.website} target="_blank" variant="link">
          {game.website}
        </Button>
      </Box>
    </>
  );
};

export default GameInfo;
