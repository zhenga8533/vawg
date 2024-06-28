import { Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import About from "../components/main/game/About";
import PlatformIcons from "../components/main/games/PlatformIcons";
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
          <HStack spacing={5}>
            <PlatformIcons platforms={data.parent_platforms?.map((p) => p.platform)} />
            <Text>AVERAGE PLAYTIME: {data.playtime} HOURS</Text>
          </HStack>
          <Heading fontSize={50}>{data.name}</Heading>

          <About description={data.description_raw} />
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
