import { Box, HStack } from "@chakra-ui/react";
import GameHeading from "../components/main/game/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import { GameQuery } from "../App";
import SortSelector from "../components/SortSelector";
import Pagination from "../components/general/Pagination";
import useGames from "../hooks/useGames";
import GameGrid from "../components/main/game/GameGrid";

interface GamesProps {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const Games = ({ gameQuery, setGameQuery }: GamesProps) => {
  const gameData = useGames(gameQuery);

  return (
    <>
      <Box marginY={5}>
        <GameHeading gameQuery={gameQuery} />
        <HStack justifyContent="space-between">
          <HStack spacing={4}>
            <PlatformSelector
              onSelectPlatform={(platform) =>
                setGameQuery({ ...gameQuery, platform })
              }
              selectedPlatform={gameQuery.platform}
            />
            <SortSelector
              onReverseOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              onSelectOrder={(sortOrder) =>
                setGameQuery({ ...gameQuery, sortOrder })
              }
              sortOrder={gameQuery.sortOrder}
            />
          </HStack>
          <Pagination
            count={gameData.count}
            onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
            page={gameQuery.page}
          />
        </HStack>
      </Box>
      <GameGrid gameData={gameData} />
      <HStack justifyContent="center" marginTop={5}>
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