import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
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
import Browses from "./routes/Browses";
import GameDetail from "./routes/GameDetail";

export interface GameQuery {
  dates: string;
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
  const gameRoutes = [
    "",
    "/best-of-the-year",
    "/popular-last-year",
    "/all-time",
    "/last-month",
    "/this-week",
    "/next-week",
  ];

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
            <TopList onSelectTop={(dates) => setGameQuery({ ...gameQuery, dates })} />
            <ReleaseList onSelectRelease={(dates) => setGameQuery({ ...gameQuery, dates })} />
            <BrowseList />
            <GenreList
              onSelectGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
              selectedGenre={gameQuery.genre}
            />
          </GridItem>
        </Show>
        <GridItem about="main">
          <Routes>
            {/* Games */}
            <Route path="/" element={<Navigate to="/games" replace />} />
            {gameRoutes.map((route) => (
              <Route
                key={route}
                path={`/games${route}`}
                element={<Games gameQuery={gameQuery} setGameQuery={setGameQuery} />}
              />
            ))}
            <Route path="/games/:slug" element={<GameDetail />} />
            {/* Browse */}
            <Route path="/platforms" element={<Browses endpoint="/platforms" title="Platforms" key="platforms" />} />
            <Route path="/stores" element={<Browses endpoint="/stores" title="Storefronts" key="stores" />} />
            <Route path="/genres" element={<Browses endpoint="/genres" title="Genres" key="genres" />} />
            <Route path="/creators" element={<Creators />} />
            <Route path="/tags" element={<Browses endpoint="/tags" title="Tags" key="tags" />} />
            <Route
              path="/developers"
              element={<Browses endpoint="/developers" title="Developers" key="developers" />}
            />
            <Route
              path="/publishers"
              element={<Browses endpoint="/publishers" title="Publishers" key="publishers" />}
            />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
