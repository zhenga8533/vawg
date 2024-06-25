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

  const date = new Date();
  const year = date.getFullYear();
  const gameRoutes: { [key: string]: () => void } = {
    "": () => setGameQuery({ ...gameQuery }),
    "/best-of-the-year": () => setGameQuery({ ...gameQuery, dates: `${year}-01-01,${year}-12-31` }),
    "/popular-last-year": () => setGameQuery({ ...gameQuery, dates: `${year - 1}-01-01,${year - 1}-12-31` }),
    "/all-time": () => setGameQuery({ ...gameQuery, dates: "" }),
    "/last-month": () => {
      date.setMonth(date.getMonth() - 1);
      const lastMonth = date.toISOString().slice(0, 10);
      setGameQuery({ ...gameQuery, dates: `${lastMonth},${date.toISOString().slice(0, 10)}` });
    },
    "/this-week": () => {
      date.setDate(date.getDate() - 7);
      const lastWeek = date.toISOString().slice(0, 10);
      setGameQuery({ ...gameQuery, dates: `${lastWeek},${date.toISOString().slice(0, 10)}` });
    },
    "/next-week": () => {
      date.setDate(date.getDate() + 7);
      const nextWeek = date.toISOString().slice(0, 10);
      setGameQuery({ ...gameQuery, dates: `${date.toISOString().slice(0, 10)},${nextWeek}` });
    },
  };

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
            {/* Games */}
            <Route path="/" element={<Navigate to="/games" replace />} />
            {Object.keys(gameRoutes).map((route) => (
              <Route
                key={route}
                path={`/games${route}`}
                element={
                  <Games gameQuery={gameQuery} key={route} onLoad={gameRoutes[route]} setGameQuery={setGameQuery} />
                }
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
