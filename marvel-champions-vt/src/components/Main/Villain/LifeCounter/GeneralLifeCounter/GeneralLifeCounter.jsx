import React from "react";
import { useState } from "react";

function GeneralLifeCounter() {
  const [count, setCount] = useState(0)

  const handleInputChange = (e) => {
    const value = e.target.value;
    /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
    if (value === "") {
      setCount(value); /* Set the state to an empty string */
    } else {
      setCount(Number(value)); /* Convert the value to a number, because the input is a string */
    }
  };

  return (
    <div id="lifeCounter">

      <p>HP:</p>

      <input type="number" value={count} onChange={handleInputChange} />

      <div id="buttonContainer">
        <button onClick={() => setCount((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCount((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>
      
  </div>
  );
}

export default GeneralLifeCounter;
