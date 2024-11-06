import React, { useState } from "react";
import Greeting from "./Greeting";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Greeting name="Ilona" />
    </>
  );
}

export default App;
