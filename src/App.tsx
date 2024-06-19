import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  return (
    <div>
      <Alert>
        Hello, <span>World</span>!
      </Alert>
      <Button
        children="Hello, World!"
        type="danger"
        onClick={() => console.log("Hello, World!")}
      />
    </div>
  );
}

export default App;
