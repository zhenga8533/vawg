import { useLocation } from "react-router-dom";
import { GameQueryProps } from "../../App";
import BrowseList from "./BrowseList";
import ItemList from "./ItemList";
import ReleaseList from "./ReleaseList";
import TopList from "./TopList";

const Aside = ({ gameQuery, setGameQuery }: GameQueryProps) => {
  const location = useLocation();
  const gameRoutes = new Set([
    "/games",
    "/games/best-of-the-year",
    "/games/popular-last-year",
    "/games/all-time",
    "/games/last-month",
    "/games/this-week",
    "/games/next-week",
  ]);
  const browseRoutes = new Set(["platforms", "stores", "genres", "creators", "tags", "developers", "publishers"]);
  const paths = location.pathname.split("/");

  return (
    <>
      <TopList />
      <ReleaseList />
      <BrowseList />
      {(gameRoutes.has(location.pathname) || (browseRoutes.has(paths[1]) && paths.length > 2)) && (
        <>
          <ItemList
            endpoint="genres"
            name="Genre"
            onSelectItem={(genre) => setGameQuery({ ...gameQuery, genre })}
            selectedItem={gameQuery.genre}
          />
          <ItemList
            endpoint="platforms"
            name="Platform"
            onSelectItem={(platform) => setGameQuery({ ...gameQuery, platform })}
            selectedItem={gameQuery.platform}
          />
          <ItemList
            endpoint="stores"
            name="Store"
            onSelectItem={(store) => setGameQuery({ ...gameQuery, store })}
            selectedItem={gameQuery.store}
          />
          <ItemList
            endpoint="tags"
            name="Tag"
            onSelectItem={(tag) => setGameQuery({ ...gameQuery, tag })}
            selectedItem={gameQuery.tag}
          />
        </>
      )}
    </>
  );
};

export default Aside;
