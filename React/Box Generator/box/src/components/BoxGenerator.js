import React, { useState } from "react";

const BoxGenerator = (props) => {
  const [generatedBox, setGeneratedBox] = useState("");
  const addBoxHandler = (event) => {
    event.preventDefault();
    props.onNewBox(generatedBox);
  };
  const colorHandler = (event) => {
    setGeneratedBox(event.target.value);
  };
  return (
    <div>
      <form onSubmit={addBoxHandler}>
        <input type="text" onChange={colorHandler} />
        <input type="submit" value="Add Box" />
      </form>
    </div>
  );
};
export default BoxGenerator;
