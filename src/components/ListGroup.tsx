function ListGroup() {
  const items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  const getAlert = () => {
    return items.length === 0 && <p>No items found</p>;
  }

  return (
    <>
      <h1>List</h1>
      { getAlert() }
      <ul className="list-group">
        {items.map(item => 
          <li className="list-group-item" key={item}>{item}</li>
        )}
      </ul>
    </>
  )
}

export default ListGroup;
