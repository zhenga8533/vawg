import { Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAbout from "../components/main/game/GameAbout";
import GameHeading from "../components/main/game/GameHeading";
import GameRating from "../components/main/game/GameRating";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, error, loading, screenshots, trailers } = useGame(slug);

  if (loading) return <Text>Loading...</Text>;
  return (
    <>
      <Grid
        gap={4}
        marginTop={5}
        templateColumns={{ base: "1fr", md: "60% 40%" }}
        templateAreas={{ base: '"left" "right"', md: '"left right"' }}
      >
        <GridItem area="left">
          <GameHeading
            name={data.name}
            parent_platforms={data.parent_platforms}
            playtime={data.playtime}
            released={data.released}
          />
          <GameAbout description={data.description_raw} />
          <GameRating rating={data.rating} />
        </GridItem>
        <GridItem area="right">
          {trailers && trailers.length > 0 && (
            <video controls width="100%" autoPlay muted>
              <source src={trailers[0].data["480"]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
          {screenshots.length > 0 && (
            <Grid gap={4} marginTop={5} templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}>
              {screenshots.map((screenshot) => (
                <Image key={screenshot.id} src={screenshot.image} alt={screenshot.id.toString()} width="100%" />
              ))}
            </Grid>
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetail;
