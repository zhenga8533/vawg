import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameAbout from "../../components/main/game/GameAbout";
import GameContributors from "../../components/main/game/GameContributors";
import GameHeading from "../../components/main/game/GameHeading";
import GameMedia from "../../components/main/game/GameMediaGrid";
import GameRating from "../../components/main/game/GameRating";
import useData from "../../hooks/useData";
import useGame, { Screenshot, Trailer } from "../../hooks/useGame";

const GameDetail = () => {
  const { slug } = useParams();
  if (!slug) return <Text>Error: No slug provided</Text>;

  const game = useGame(slug);
  const trailers = useData<Trailer>(`/games/${slug}/movies`);
  const screenshots = useData<Screenshot>(`/games/${slug}/screenshots`);
  const error = game.error || trailers.error || screenshots.error;
  const loading = game.loading || trailers.loading || screenshots.loading;
  const data = game.data;

  if (error) return <Text>Error: {error}</Text>;
  else if (loading) return <Text>Loading...</Text>;
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
          <GameRating data={data} />
        </GridItem>
        <GridItem area="right">
          {<GameMedia limited={true} screenshots={screenshots.results} trailers={trailers.results} />}
          <br />
          {<GameContributors slug={slug} />}
        </GridItem>
      </Grid>
    </>
  );
};

export default GameDetail;