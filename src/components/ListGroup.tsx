import { MouseEvent } from "react";

function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const getEmpty = () => {
    return items.length === 0 && <p>No items found</p>;
  };

  const handleClick = (event: MouseEvent) => {
    alert(`Clicked on ${event.target}`);
  };

  return (
    <>
      <h1>List</h1>
      {getEmpty()}
      <ul className="list-group">
        {items.map((item) => (
          <li className="list-group-item" key={item} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
