import { Box, HStack } from "@chakra-ui/react";
import { useEffect } from "react";
import { GameQuery } from "../App";
import Pagination from "../components/general/Pagination";
import GameGrid from "../components/main/games/GameGrid";
import GameSelector from "../components/main/games/GameSelector";
import GameHeading from "../components/main/games/GamesHeading";
import useGames from "../hooks/useGames";

export interface GamesProps {
  gameQuery: GameQuery;
  onLoad?: () => void;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const Games = ({ gameQuery, onLoad, setGameQuery }: GamesProps) => {
  const gameData = useGames(gameQuery);

  useEffect(() => {
    if (onLoad) onLoad();
  }, []);

  return (
    <>
      <Box my={5}>
        <GameHeading gameQuery={gameQuery} />
        <GameSelector gameData={gameData} gameQuery={gameQuery} setGameQuery={setGameQuery} />
      </Box>
      <GameGrid gameData={gameData} />
      <HStack justifyContent="center" mt={5}>
        <Pagination
          count={gameData.count}
          onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
          page={gameQuery.page}
        />
      </HStack>
    </>
  );
};

export default Games;
