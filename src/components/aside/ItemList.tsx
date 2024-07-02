import { Heading, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import anyItem from "../../assets/any-item.webp";
import useItems, { Item } from "../../hooks/useItems";
import cropImageURL from "../../services/image-url";
import ShowButton from "../general/ShowButton";
import SkeletonListItem from "../general/SkeletonListItem";
import ItemItem from "./ItemItem";

interface ItemListProps {
  endpoint: string;
  name: string;
  onSelectItem: (item: Item | null) => void;
  selectedItem: Item | null;
}

const ItemList = ({ endpoint, name, selectedItem, onSelectItem }: ItemListProps) => {
  const { results, loading } = useItems(endpoint);
  const navigate = useNavigate();
  const location = useLocation();
  const [showAll, setShowAll] = useState(false);
  const skeletons = Array.from({ length: 3 }, (_, i) => <SkeletonListItem key={i} />);

  return (
    <>
      <Heading className="list-heading" fontSize="3xl">
        {`${name}s`}
      </Heading>
      <List>
        {loading && skeletons}
        {!loading && (
          <ItemItem
            item={null}
            image={anyItem}
            name={`Any ${name}`}
            key={0}
            onSelectItem={onSelectItem}
            selectedItem={selectedItem}
          />
        )}
        {results.slice(0, showAll ? results.length : 2).map((item: Item) => (
          <ItemItem
            item={item}
            image={cropImageURL(item.image_background)}
            name={item.name}
            key={item.id}
            onSelectItem={() => {
              onSelectItem(item);
              if (!location.pathname.startsWith("/vawg/games")) navigate("/games");
            }}
            selectedItem={selectedItem}
          />
        ))}
        {results.length > 2 && (
          <ListItem marginTop={1}>
            <ShowButton showAll={showAll} setShowAll={setShowAll} />
          </ListItem>
        )}
      </List>
    </>
  );
};

export default ItemList;
