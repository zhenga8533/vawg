import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAbout from "../components/main/game/GameAbout";
import GameHeading from "../components/main/game/GameHeading";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, error, loading, trailers } = useGame(slug);

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
        </GridItem>
        <GridItem area="right">
          {trailers && trailers.length > 0 && (
            <video controls width="100%">
              <source src={trailers[0].data["480"]} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          )}
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetail;
