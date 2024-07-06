import { Box, Button, Grid, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { GameData } from "../../../hooks/useGame";
import { formatDate } from "../../../services/formatting";

interface GameInfoProps {
  game: GameData;
}

const GameInfo = ({ game }: GameInfoProps) => {
  return (
    <>
      <Grid gap={4} mt={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
        <Box>
          <Text color="gray">Platforms</Text>
          <HStack wrap="wrap">
            {game.platforms.map((platform, index) => (
              <HStack key={platform.platform.id} spacing={0}>
                <Link className="link" to={`/platforms/${platform.platform.slug}`}>
                  {platform.platform.name}
                </Link>
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
                <Link className="link" to={`/genres/${genre.slug}`}>
                  {genre.name}
                </Link>
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
                <Link className="link" to={`/developers/${developer.slug}`}>
                  {developer.name}
                </Link>
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
                <Link className="link" to={`/publishers/${publisher.slug}`}>
                  {publisher.name}
                </Link>
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
              <Link className="link" to={`/tags/${tag.slug}`}>
                {tag.name}
              </Link>
              <Text>{index < game.tags.length - 1 ? ", " : ""}</Text>
            </HStack>
          ))}
        </HStack>
      </Box>

      <Box mt={4}>
        <Text color="gray">Website</Text>
        <Button as="a" className="link" href={game.website} target="_blank" variant="link">
          {game.website}
        </Button>
      </Box>
    </>
  );
};

export default GameInfo;
