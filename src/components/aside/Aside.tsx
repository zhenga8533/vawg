import { GameQuery } from "../../App";
import BrowseList from "./BrowseList";
import ItemList from "./ItemList";
import ReleaseList from "./ReleaseList";
import TopList from "./TopList";

export interface AsideProps {
  gameQuery: GameQuery;
  setGameQuery: React.Dispatch<React.SetStateAction<GameQuery>>;
}

const Aside = ({ gameQuery, setGameQuery }: AsideProps) => {
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
