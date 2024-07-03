import { Box, Button, HStack } from "@chakra-ui/react";
import { BaseQuery, GameQuery } from "../../../App";
import { Data } from "../../../hooks/useData";
import Pagination from "../../general/Pagination";
import PlatformSelector from "./PlatformSelector";
import SortSelector from "./SortSelector";

interface GameSelectorProps {
  gameData: Data;
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const GameSelector = ({ gameData, gameQuery, setGameQuery }: GameSelectorProps) => {
  return (
    <>
      <HStack justifyContent={{ base: "center", xl: "space-between" }}>
        <HStack display={{ base: "none", md: "flex" }} spacing={4}>
          <PlatformSelector
            onSelectPlatform={(parentPlatform) => setGameQuery({ ...gameQuery, parentPlatform })}
            selectedPlatform={gameQuery.parentPlatform}
          />
          <SortSelector
            onReverseOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            onSelectOrder={(sortOrder) => setGameQuery({ ...gameQuery, sortOrder })}
            sortOrder={gameQuery.sortOrder}
          />
          <Button onClick={() => setGameQuery({ ...BaseQuery })}>Clear</Button>
        </HStack>
        <Box display={{ base: "none", xl: "flex" }}>
          <Pagination
            count={gameData.count}
            onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
            page={gameQuery.page}
          />
        </Box>
      </HStack>
      <HStack display={{ base: "flex", xl: "none" }} justifyContent="center" mt={3}>
        <Pagination
          count={gameData.count}
          onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
          page={gameQuery.page}
        />
      </HStack>
    </>
  );
};

export default GameSelector;
