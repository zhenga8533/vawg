import { Box, Grid, GridItem, Show } from "@chakra-ui/react";
import { Fragment, useState } from "react";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Aside from "./components/aside/Aside";
import Breadcrumbs from "./components/main/Breadcrumbs";
import Navbar from "./components/nav/Navbar";
import { Info } from "./hooks/useData";
import { Item } from "./hooks/useItems";
import BadRoute from "./routes/BadRoute";
import BrowseDetail from "./routes/BrowseDetail";
import Browses from "./routes/Browses";
import { GameDetailWrapper } from "./routes/GameDetail";
import Games from "./routes/Games";
import Home from "./routes/Home";
import ReleaseCalendar from "./routes/ReleaseCalendar";

export interface GameQuery {
  creator: Item | null;
  dates: string;
  developer: Item | null;
  genre: Item | null;
  page: number;
  parentPlatform: Info | null;
  platform: Item | null;
  publisher: Item | null;
  searchText: string;
  sortOrder: string;
  store: Item | null;
  tag: Item | null;
}

export const BaseQuery: GameQuery = {
  creator: null,
  dates: "",
  developer: null,
  genre: null,
  page: 1,
  parentPlatform: null,
  platform: null,
  publisher: null,
  searchText: "",
  sortOrder: "",
  store: null,
  tag: null,
};

export interface GameQueryProps {
  gameQuery: GameQuery;
  setGameQuery: (gameQuery: GameQuery) => void;
}

function App() {
  // Background image and theme state
  const [bgImage, setBgImage] = useState<string>("");
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const gradient: { [key: string]: string } = {
    dark: "linear-gradient(rgba(18, 18, 18, 0), rgba(18, 18, 18, 1))",
    light: "linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))",
    sakura: "linear-gradient(rgba(255, 238, 251, 0), rgba(255, 238, 251, 1))",
  };

  // Game query state
  const [gameQuery, setGameQuery] = useState<GameQuery>(BaseQuery);

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

  const browseRoutes: { endpoint: string; title: string }[] = [
    { endpoint: "platforms", title: "Platforms" },
    { endpoint: "stores", title: "Storefronts" },
    { endpoint: "genres", title: "Genres" },
    { endpoint: "creators", title: "Creators" },
    { endpoint: "tags", title: "Tags" },
    { endpoint: "developers", title: "Developers" },
    { endpoint: "publishers", title: "Publishers" },
  ];

  return (
    <Router>
      <Box position="relative">
        <Box
          position="absolute"
          top={-10}
          left="0"
          width="100%"
          height="64vh"
          zIndex={-1}
          backgroundImage={`${gradient[theme]}, url('${bgImage}')`}
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
              onSelectTheme={(theme) => setTheme(theme)}
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
              <Route path="/" element={<Home />} />
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
              {browseRoutes.map((route) => (
                <Fragment key={route.endpoint}>
                  <Route
                    key={route.endpoint}
                    path={`/${route.endpoint}`}
                    element={<Browses endpoint={`/${route.endpoint}`} title={route.title} key={route.endpoint} />}
                  />
                  <Route
                    key={`${route.endpoint}/:slug`}
                    path={`/${route.endpoint}/:slug`}
                    element={
                      <BrowseDetail
                        endpoint={route.endpoint}
                        gameQuery={gameQuery}
                        setBgImage={setBgImage}
                        setGameQuery={setGameQuery}
                      />
                    }
                  />
                </Fragment>
              ))}
              <Route path="*" element={<BadRoute />} />
            </Routes>
          </GridItem>
        </Grid>
      </Box>
    </Router>
  );
}

export default App;
