import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";
import anyItem from "../../assets/any-item.webp";
import useItems, { Item } from "../../hooks/useItems";
import cropImageURL from "../../services/image-url";
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
        <ListItem marginTop={1}>
          <Button
            color="gray"
            leftIcon={showAll ? <BsChevronUp /> : <BsChevronDown />}
            onClick={() => setShowAll(!showAll)}
            padding={0}
            variant="link"
          >
            {showAll ? "Hide" : "Show all"}
          </Button>
        </ListItem>
      </List>
    </>
  );
};

export default ItemList;
