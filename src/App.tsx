import ListGroup from "./components/ListGroup";

function App() {
  let items = [
    "An item",
    "A second item",
    "A third item",
    "A fourth item",
    "And a fifth one",
  ];

  return (
    <div>
      <ListGroup items={items} heading="Items" />
    </div>
  );
}

export default App;
