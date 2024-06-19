import { BsArrowThroughHeartFill } from "react-icons/bs";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];

  return (
    <div>
      <div>
        <BsArrowThroughHeartFill color="red" size="40" />
        <ListGroup heading="Items" items={items} />
      </div>
    </div>
  );
}

export default App;
