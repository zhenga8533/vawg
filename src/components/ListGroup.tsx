import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
}

function ListGroup({ items, heading }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const getActive = (index: number) => {
    return index === selectedIndex ? "active" : "";
  };

  const getEmpty = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  return (
    <>
      <h1>{heading}</h1>
      {getEmpty()}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={`list-group-item ${getActive(index)}`}
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
