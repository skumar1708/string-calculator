import React, { useState } from "react";
import { add } from "./utils/stringCalculator";

function App() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleCalculate = () => {
    try {
      setResult(add(input));
    } catch (error) {
      setResult(error.message);
    }
  };

  return (
    <div className="container">
      <h1>String Calculator</h1>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter numbers"
      />
      <button onClick={handleCalculate}>Calculate</button>
      <h2>Result: {result}</h2>
    </div>
  );
}

export default App;
