import React, { useState } from "react";
import BoxDisplay from "./components/BoxDisplay";
import BoxGenerator from "./components/BoxGenerator";
import "./App.css";

function App() {
  const [boxNew, setBoxNew] = useState([]);
  const addbox = (newBox) => {
    setBoxNew(boxNew.concat(newBox));
  };
  return (
    <div className="App">
      <p>Add Color</p>
      <BoxGenerator onNewBox={addbox} />
      <BoxDisplay box={boxNew} />
    </div>
  );
}

export default App;
