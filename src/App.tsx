import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Aside from "./components/aside/Aside";
import Breadcrumbs from "./components/main/Breadcrumbs";
import Navbar from "./components/nav/Navbar";
import { Info } from "./hooks/useData";
import { Item } from "./hooks/useItems";
import Browses from "./routes/Browses";
import Creators from "./routes/Creators";
import { GameDetailWrapper } from "./routes/GameDetail";
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
  const [bgImage, setBgImage] = useState<string>("");
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
      <Box position="relative">
        <Box
          position="absolute"
          top={-10}
          left="0"
          width="100%"
          height="72vh"
          zIndex={-1}
          backgroundImage={`linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)), url('${bgImage}')`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          opacity={0.36}
        />
        <Grid
          m={10}
          templateAreas={{
            base: `"nav" "main"`,
            lg: `"nav nav" "aside main"`,
          }}
          templateColumns={{
            base: "1fr",
            lg: "200px 1fr",
          }}
        >
          <GridItem area="nav" mb={4}>
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
                  path={`/games${route}`}
                  element={
                    <Games gameQuery={gameQuery} key={route} onLoad={gameRoutes[route]} setGameQuery={setGameQuery} />
                  }
                />
              ))}
              <Route
                path={`/games/release-calendar`}
                element={<ReleaseCalendar gameQuery={gameQuery} setGameQuery={setGameQuery} />}
              />
              <Route path="/games/:slug" element={<GameDetailWrapper setBgImage={setBgImage} />} />
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
      </Box>
    </Router>
  );
}

export default App;
