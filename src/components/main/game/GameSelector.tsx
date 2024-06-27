import { HStack } from "@chakra-ui/react";
import PlatformSelector from "./PlatformSelector";
import Pagination from "../../general/Pagination";
import { GameQuery } from "../../../App";
import SortSelector from "./SortSelector";
import { Data } from "../../../hooks/useData";

interface GameSelectorProps {
  gameData: Data;
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

const GameSelector = ({ gameData, gameQuery, setGameQuery }: GameSelectorProps) => {
  return (
    <HStack justifyContent={{ base: "center", md: "space-between" }}>
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
      </HStack>
      <Pagination
        count={gameData.count}
        onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
        page={gameQuery.page}
      />
    </HStack>
  );
};

export default GameSelector;
