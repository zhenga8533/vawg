import { Button, HStack, Image, ListItem } from "@chakra-ui/react";
import { Item } from "../../hooks/useItems";
import getStyle from "../../services/select-style";

interface ItemItemProps {
  item: Item | null;
  image: string;
  name: string;
  onSelectItem: (item: Item | null) => void;
  selectedItem: Item | null;
}

const ItemItem = ({ item, image, name, onSelectItem, selectedItem }: ItemItemProps) => {
  return (
    <ListItem paddingY={2}>
      <HStack>
        <Image
          alt={name}
          boxSize="32px"
          borderRadius={8}
          cursor="pointer"
          objectFit={"cover"}
          onClick={() => onSelectItem(item)}
          src={image}
        />
        <Button
          {...getStyle(item?.id, selectedItem?.id)}
          maxWidth="70%"
          onClick={() => onSelectItem(item)}
          textAlign={"left"}
          variant="link"
          whiteSpace="normal"
        >
          {name}
        </Button>
      </HStack>
    </ListItem>
  );
};

export default ItemItem;
