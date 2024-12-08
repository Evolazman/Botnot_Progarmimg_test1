import React, { useState } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [pattern, setPattern] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const number = parseInt(input, 10);
    if (isNaN(number) || number <= 0) {
      alert("Please enter a valid positive number");
      return;
    }
    generatePattern(number);
  };

  const generatePattern = (n) => {
    const result = [];

    // เพิ่มดาวขึ้น
    for (let i = 1; i <= n; i++) {
      result.push("*".repeat(i));
    }

    // ลดดาวลง
    for (let i = n - 1; i > 0; i--) {
      result.push("*".repeat(i));
    }

    setPattern(result);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h3>Star Pattern Generator</h3>
      <form onSubmit={handleSubmit}>
        <label>
          Input:{" "}
          <input
            type="number"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter a number"
          />
        </label>
        <button type="submit">Submit</button>
      </form>

      <div style={{ marginTop: "20px" }}>
        {pattern.map((line, index) => (
          <div key={index}>{line}</div>
        ))}
      </div>
    </div>
  );
};


export default App;
