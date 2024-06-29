import { Text } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import GameDetailGrid from "../../components/main/game/GameDetailGrid";
import GameHeading from "../../components/main/game/GameHeading";
import GameMediaGrid from "../../components/main/game/GameMediaGrid";
import useData from "../../hooks/useData";
import useGame, { Screenshot, Trailer } from "../../hooks/useGame";

const GameMedia = () => {
  const { slug } = useParams();
  if (!slug) return <Text>Error: No slug provided</Text>;

  const game = useGame(slug);
  const trailers = useData<Trailer>(`/games/${slug}/movies`);
  const screenshots = useData<Screenshot>(`/games/${slug}/screenshots`);
  const error = game.error || trailers.error || screenshots.error;
  const loading = game.loading || trailers.loading || screenshots.loading;
  const data = game.data;

  return (
    <>
      <GameHeading
        name={data.name}
        parent_platforms={data.parent_platforms}
        playtime={data.playtime}
        released={data.released}
      />
      <GameDetailGrid
        left={<GameMediaGrid limited={false} screenshots={screenshots.results} trailers={trailers.results} />}
      />
    </>
  );
};

export default GameMedia;
