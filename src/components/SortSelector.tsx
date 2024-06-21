import {
  Button,
  Checkbox,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsChevronDown } from "react-icons/bs";

interface SortSelectorProps {
  onReverseOrder: (order: string) => void;
  onSelectOrder: (order: string) => void;
  sortOrder: string;
}

const SortSelector = ({
  onReverseOrder,
  onSelectOrder,
  sortOrder,
}: SortSelectorProps) => {
  const [reverse, setReverse] = useState(false);
  const [sortOrders, setSortOrders] = useState([
    { label: "Relevance", value: "" },
    { label: "Name", value: "name" },
    { label: "Released", value: "-released" },
    { label: "Added", value: "-added" },
    { label: "Created", value: "-created" },
    { label: "Updated", value: "-updated" },
    { label: "Rating", value: "-rating" },
    { label: "Metacritic", value: "-metacritic" },
  ]);

  const sortOrderLabel = sortOrders.find(
    (order) => order.value === sortOrder
  )?.label;

  const reverseOrder = () => {
    const reverseValue = (value: string) =>
      value?.startsWith("-") ? value.slice(1) : `-${value || ""}`;

    setReverse(!reverse);
    setSortOrders(
      sortOrders.map((order) => {
        return { label: order.label, value: reverseValue(order.value) };
      })
    );
    onReverseOrder(reverseValue(sortOrder));
  };

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
        <MenuDivider />
        <Checkbox
          isChecked={reverse}
          marginLeft={2}
          onChange={() => reverseOrder()}
        >
          Reverse
        </Checkbox>
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
