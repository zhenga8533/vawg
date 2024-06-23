import { useState } from "react";
import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformSelector from "./components/PlatformSelector";
import SortSelector from "./components/SortSelector";
import { Genre } from "./hooks/useGenres";
import useGames, { Platform } from "./hooks/useGames";
import GameHeading from "./components/GameHeading";
import Pagination from "./components/Pagination";
import ReleaseList from "./components/ReleaseList";
import BrowseList from "./components/BrowseList";

export interface GameQuery {
  genre: Genre | null;
  page: number;
  platform: Platform | null;
  searchText: string;
  sortOrder: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    sortOrder: "",
  } as GameQuery);
  const gameData = useGames(gameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area="nav">
        <Navbar
          onSearch={(searchText) => {
            setGameQuery({ ...gameQuery, searchText });
          }}
        />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={5}>
          <ReleaseList />
          <BrowseList />
          <GenreList
            onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
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
        <HStack marginBottom={10} justifyContent="center">
          <Pagination
            count={gameData.count}
            onPageChange={(page) => setGameQuery({ ...gameQuery, page })}
            page={gameQuery.page}
          />
        </HStack>
      </GridItem>
    </Grid>
  );
}

export default App;
