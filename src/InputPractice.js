import React, { useState } from "react";
import Output from "./components/Output";

function InputPractice() {
  const [inputvalue, setInputvalue] = useState("");
  const [showvalue, setShowvalue] = useState("");

  const handleChange = (e) => {
    setInputvalue(e.target.value);
  };
  const handleClick = () => {
    setShowvalue(inputvalue);
  };

  return (
    <div>
      <input onChange={handleChange} />
      <button onClick={handleClick}>Click me</button>
      {/* <h1>Output: {showvalue}</h1> */}
      <Output showvalue={showvalue} />
    </div>
  );
}
export default InputPractice;
