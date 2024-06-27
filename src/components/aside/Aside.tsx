import { GameQueryProps } from "../../App";
import BrowseList from "./BrowseList";
import ItemList from "./ItemList";
import ReleaseList from "./ReleaseList";
import TopList from "./TopList";

const Aside = ({ gameQuery, setGameQuery }: GameQueryProps) => {
  return (
    <>
      <TopList />
      <ReleaseList />
      <BrowseList />
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
    </>
  );
};

export default Aside;
