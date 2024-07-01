import { Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Aside from "./components/aside/Aside";
import Breadcrumbs from "./components/main/Breadcrumbs";
import Navbar from "./components/nav/Navbar";
import { Info } from "./hooks/useData";
import { Item } from "./hooks/useItems";
import Browses from "./routes/Browses";
import Creators from "./routes/Creators";
import GameDetail from "./routes/GameDetail";
import Games from "./routes/Games";
import ReleaseCalendar from "./routes/ReleaseCalendar";

export interface GameQuery {
  dates: string;
  genre: Item | null;
  page: number;
  parentPlatform: Info | null;
  platform: Item | null;
  searchText: string;
  sortOrder: string;
  store: Item | null;
  tag: Item | null;
}

export interface GameQueryProps {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({
    dates: "",
    genre: null,
    page: 1,
    parentPlatform: null,
    platform: null,
    searchText: "",
    sortOrder: "",
    store: null,
    tag: null,
  });

  const parseDate = (date: Date) => date.toISOString().slice(0, 10);
  const parseDateFrame = (days: number) => {
    const date = new Date();
    const lastDate = new Date();
    lastDate.setDate(date.getDate() + days);
    if (days > 0) return `${parseDate(date)},${parseDate(lastDate)}`;
    else return `${parseDate(lastDate)},${parseDate(date)}`;
  };

  const year = new Date().getFullYear();
  const gameRoutes: { [key: string]: () => void } = {
    "": () => setGameQuery({ ...gameQuery, dates: "", page: 1 }),
    "/best-of-the-year": () => setGameQuery({ ...gameQuery, dates: `${year}-01-01,${year}-12-31`, page: 1 }),
    "/popular-last-year": () => setGameQuery({ ...gameQuery, dates: `${year - 1}-01-01,${year - 1}-12-31`, page: 1 }),
    "/all-time": () => setGameQuery({ ...gameQuery, dates: "", page: 1 }),
    "/last-month": () => setGameQuery({ ...gameQuery, dates: parseDateFrame(-30), page: 1 }),
    "/this-week": () => setGameQuery({ ...gameQuery, dates: parseDateFrame(-7), page: 1 }),
    "/next-week": () => setGameQuery({ ...gameQuery, dates: parseDateFrame(7), page: 1 }),
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
            gameQuery={gameQuery}
            setGameQuery={setGameQuery}
            onSelectPlatform={(parentPlatform) => setGameQuery({ ...gameQuery, parentPlatform })}
            selectedPlatform={gameQuery.parentPlatform}
            onReverseOrder={(order) => setGameQuery({ ...gameQuery, sortOrder: order })}
            onSelectOrder={(order) => setGameQuery({ ...gameQuery, sortOrder: order })}
            sortOrder={gameQuery.sortOrder}
          />
        </GridItem>
        <Show above="lg">
          <GridItem area="aside">
            <Aside gameQuery={gameQuery} setGameQuery={setGameQuery} />
          </GridItem>
        </Show>
        <GridItem about="main">
          <Breadcrumbs />
          <Routes>
            {/* Games */}
            {Object.keys(gameRoutes).map((route) => (
              <Route
                key={route}
                path={`/vawg/games${route}`}
                element={
                  <Games gameQuery={gameQuery} key={route} onLoad={gameRoutes[route]} setGameQuery={setGameQuery} />
                }
              />
            ))}
            <Route
              path={`/vawg/games/release-calendar`}
              element={<ReleaseCalendar gameQuery={gameQuery} setGameQuery={setGameQuery} />}
            />
            <Route path="/vawg/games/:slug" element={<GameDetail />} />
            {/* Browse */}
            <Route
              path="/vawg/platforms"
              element={<Browses endpoint="/platforms" title="Platforms" key="platforms" />}
            />
            <Route path="/vawg/stores" element={<Browses endpoint="/stores" title="Storefronts" key="stores" />} />
            <Route path="/vawg/genres" element={<Browses endpoint="/genres" title="Genres" key="genres" />} />
            <Route path="/vawg/creators" element={<Creators />} />
            <Route path="/vawg/tags" element={<Browses endpoint="/tags" title="Tags" key="tags" />} />
            <Route
              path="/vawg/developers"
              element={<Browses endpoint="/developers" title="Developers" key="developers" />}
            />
            <Route
              path="/vawg/publishers"
              element={<Browses endpoint="/publishers" title="Publishers" key="publishers" />}
            />
          </Routes>
        </GridItem>
      </Grid>
    </Router>
  );
}

export default App;
