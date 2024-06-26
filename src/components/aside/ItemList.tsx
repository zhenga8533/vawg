import { Button, Heading, List, ListItem } from "@chakra-ui/react";
import useItems, { Item } from "../../hooks/useItems";
import cropImageURL from "../../services/image-url";
import SkeletonListItem from "../general/SkeletonListItem";
import anyItem from "../../assets/any-genre.webp";
import ItemItem from "./ItemItem";
import { useState } from "react";
import { BsChevronDown, BsChevronUp } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

interface ItemListProps {
  endpoint: string;
  name: string;
  onSelectItem: (item: Item | null) => void;
  selectedItem: Item | null;
}

const ItemList = ({ endpoint, name, selectedItem, onSelectItem }: ItemListProps) => {
  const { data, loading } = useItems(endpoint);
  const navigate = useNavigate();
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
        {data.slice(0, showAll ? data.length : 2).map((item) => (
          <ItemItem
            item={item}
            image={cropImageURL(item.image_background)}
            name={item.name}
            key={item.id}
            onSelectItem={() => {
              navigate("/games");
              onSelectItem(item);
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
