import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Grid, GridItem, Show } from "@chakra-ui/react";
import Navbar from "./components/nav/Navbar";
import GenreList from "./components/aside/GenreList";
import { Genre } from "./hooks/useGenres";
import { Platform } from "./hooks/useGames";
import ReleaseList from "./components/aside/ReleaseList";
import BrowseList from "./components/aside/BrowseList";
import TopList from "./components/aside/TopList";
import Games from "./routes/Games";
import Creators from "./routes/Creators";
import Genres from "./routes/Genres";

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

  return (
    <Router>
      <Grid
        margin={10}
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <GridItem area="nav" marginBottom={4}>
          <Navbar
            onSearch={(searchText) => {
              setGameQuery({ ...gameQuery, searchText });
            }}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <TopList />
            <ReleaseList />
            <BrowseList />
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem about="main">
          <Routes>
            <Route
              path="/"
              element={
                <Games gameQuery={gameQuery} setGameQuery={setGameQuery} />
              }
            />
            {/* Browse */}
            <Route path="/genres" element={<Genres />} />
            <Route path="/creators" element={<Creators />} />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
