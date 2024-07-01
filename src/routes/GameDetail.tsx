import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import LoadingWheel from "../components/general/LoadingWheel";
import GameAbout from "../components/main/game/GameAbout";
import GameAchievements from "../components/main/game/GameAchievements";
import GameDevelopers from "../components/main/game/GameDevelopers";
import GameHeading from "../components/main/game/GameHeading";
import GameInfo from "../components/main/game/GameInfo";
import GameMedia from "../components/main/game/GameMediaGrid";
import GameParents from "../components/main/game/GameParents";
import GameRating from "../components/main/game/GameRating";
import GameSeries from "../components/main/game/GameSeries";
import GameStores from "../components/main/game/GameStores";
import useData from "../hooks/useData";
import useGame, { Screenshot, Trailer } from "../hooks/useGame";

export function GameDetailWrapper() {
  const { slug } = useParams();
  return <GameDetail key={slug} />;
}

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
  else if (loading) return <LoadingWheel />;
  return (
    <>
      <Grid
        gap="5%"
        marginTop={5}
        templateColumns={{ base: "1fr", md: "55% 40%" }}
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
          <GameRating ratings={data.ratings} />
          <GameInfo game={data} />
          <GameSeries slug={slug} />
          <GameParents slug={slug} />
        </GridItem>
        <GridItem area="right">
          {<GameMedia limited={true} screenshots={screenshots.results} trailers={trailers.results} />}
          {<GameStores stores={data.stores} />}
          {<GameDevelopers slug={slug} />}
        </GridItem>
      </Grid>
      <GameAchievements slug={slug} />
    </>
  );
};

export default GameDetail;
