import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && (
        <Alert type="warning" onClose={() => setAlertVisibility(false)}>
          Hello, <span>World</span>!
        </Alert>
      )}
      <Button
        children="Hello, World!"
        onClick={() => setAlertVisibility(true)}
        type="danger"
      />
    </div>
  );
}

export default App;
