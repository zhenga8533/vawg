import { Grid, GridItem, HStack, Heading, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import PlatformIcons from "../components/main/game/PlatformIcons";
import useGame from "../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  const { data, error, loading } = useGame(slug);

  return (
    <>
      <Grid
        gap={4}
        templateColumns={{ base: "1fr", md: "60% 40%" }}
        templateAreas={{ base: '"left" "right"', md: '"left right"' }}
      >
        <GridItem area="left">
          <HStack>
            <PlatformIcons platforms={data.parent_platforms?.map((p) => p.platform)} />
            <Text>AVERAGE PLAYTIME: {data.playtime} HOURS</Text>
          </HStack>
          <Heading>{data.name}</Heading>
        </GridItem>
        <GridItem area="right">
          <Text>{data.added}</Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetail;
