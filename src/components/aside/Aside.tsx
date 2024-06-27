import { useLocation } from "react-router-dom";
import { GameQueryProps } from "../../App";
import BrowseList from "./BrowseList";
import ItemList from "./ItemList";
import ReleaseList from "./ReleaseList";
import TopList from "./TopList";

const Aside = ({ gameQuery, setGameQuery }: GameQueryProps) => {
  const location = useLocation();

  return (
    <>
      <TopList />
      <ReleaseList />
      <BrowseList />
      {location.pathname.startsWith("/games") && (
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
