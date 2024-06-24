import { Box, GridItem, HStack } from "@chakra-ui/react";
import GameHeading from "../components/game/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import { GameQuery } from "../App";
import SortSelector from "../components/SortSelector";
import Pagination from "../components/general/Pagination";
import useGames from "../hooks/useGames";
import GameGrid from "../components/game/GameGrid";

interface GamesProps {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const Games = ({ gameQuery, setGameQuery }: GamesProps) => {
  const gameData = useGames(gameQuery);

  return (
    <GridItem area="main">
      <Box marginLeft={10}>
        <GameHeading gameQuery={gameQuery} />
        <HStack justifyContent="space-between" marginRight={10}>
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
      <HStack justifyContent="center">
        <Pagination
          count={gameData.count}
          onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
          page={gameQuery.page}
        />
      </HStack>
    </GridItem>
  );
};

export default Games;
