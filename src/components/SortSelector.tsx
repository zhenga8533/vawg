import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onSelectOrder: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({ onSelectOrder, sortOrder }: SortSelectorProps) => {
  const sortOrders = [
    { label: "Relevance", value: "" },
    { label: "Name", value: "name" },
    { label: "Released", value: "-released" },
    { label: "Added", value: "-added" },
    { label: "Created", value: "-created" },
    { label: "Updated", value: "-updated" },
    { label: "Rating", value: "-rating" },
    { label: "Metacritic", value: "-metacritic" },
  ];

  const sortOrderLabel = sortOrders.find(
    (order) => order.value === sortOrder
  )?.label;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        Order by: {sortOrderLabel || "Relevance"}
      </MenuButton>
      <MenuList>
        {sortOrders.map((order) => (
          <MenuItem
            fontWeight={sortOrder === order.value ? "bold" : "normal"}
            key={order.value}
            onClick={() => onSelectOrder(order.value)}
            color={sortOrder === order.value ? "blue.500" : ""}
          >
            {order.label}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
