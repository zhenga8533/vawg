import { Grid, GridItem, Text } from "@chakra-ui/react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorMessage from "../components/general/ErrorMessage";
import LoadingWheel from "../components/general/LoadingWheel";
import GameAbout from "../components/main/game/GameAbout";
import GameAchievements from "../components/main/game/GameAchievements";
import GameDevelopers from "../components/main/game/GameDevelopers";
import GameHeading from "../components/main/game/GameHeading";
import GameInfo from "../components/main/game/GameInfo";
import GameMediaGrid from "../components/main/game/GameMediaGrid";
import GameRating from "../components/main/game/GameRating";
import GameRelations from "../components/main/game/GameRelations";
import GameRequirements from "../components/main/game/GameRequirements";
import GameStores from "../components/main/game/GameStores";
import useData from "../hooks/useData";
import useGame, { Screenshot, Trailer } from "../hooks/useGame";
import { formatDate } from "../services/formatting";

interface GameDetailProps {
  setBgImage: (bgImage: string) => void;
}

export function GameDetailWrapper({ setBgImage }: GameDetailProps) {
  const { slug } = useParams();
  return <GameDetail setBgImage={setBgImage} key={slug} />;
}

const GameDetail = ({ setBgImage }: GameDetailProps) => {
  const { slug } = useParams();
  if (!slug) return <Text>Error: No slug provided</Text>;

  const game = useGame(slug);
  const trailers = useData<Trailer>(`/games/${slug}/movies`);
  const screenshots = useData<Screenshot>(`/games/${slug}/screenshots`);
  const error = game.error || trailers.error || screenshots.error;
  const loading = game.loading || trailers.loading || screenshots.loading;
  const data = game.data;

  useEffect(() => {
    if (data && data.background_image) {
      setBgImage(data.background_image);
    }

    return () => {
      setBgImage("");
    };
  }, [data]);

  if (error) return <ErrorMessage error={error} />;
  else if (loading) return <LoadingWheel />;
  return (
    <>
      <Grid
        gap={{ base: 5, md: "5%" }}
        mt={5}
        templateColumns={{ base: "1fr", md: "55% 40%" }}
        templateAreas={{ base: '"left" "right"', md: '"left right"' }}
      >
        <GridItem area="left">
          <GameHeading
            name={data.name}
            parent_platforms={data.parent_platforms}
            playtime={data.playtime}
            released={data.released}
            score={data.metacritic}
            tba={data.tba}
          />
          <Text color="gray" mb={3}>
            Last Modified: {data.updated ? formatDate(data.updated) : "Unknown"}
          </Text>
          <GameAbout description={data.description} />
          <GameRating ratings={data.ratings} />
          <GameInfo game={data} />
          <GameRelations endpoint="parent-games" heading="Parent Games" slug={slug} />
          <GameRelations endpoint="additions" heading="DLC's and Editions" slug={slug} />
          <GameRelations endpoint="game-series" heading="Games in the Series" slug={slug} />
        </GridItem>
        <GridItem area="right">
          {<GameMediaGrid screenshots={screenshots.results} trailers={trailers.results} />}
          {<GameStores stores={data.stores} />}
          {<GameDevelopers slug={slug} />}
        </GridItem>
      </Grid>
      <GameRequirements platforms={data.platforms} />
      <GameAchievements slug={slug} />
      {/* <GameReddit slug={slug} /> */}
    </>
  );
};

export default GameDetail;
