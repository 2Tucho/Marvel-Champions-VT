import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function RiskyBusinessLifeCounter() {
  const [count, setCount] = useState(0);

  const {phase} = useContext(PhaseButtonsContext);

  const handleInputChange = (e) => {
    const value = e.target.value;
    /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
    if (value === "") {
      setCount(value); /* Set the state to an empty string */
    } else {
      setCount(Number(value)); /* Convert the value to a number, because the input is a string */
    }
  };

  return phase.includes("B") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={count} onChange={handleInputChange} />

        <div>
          <button onClick={() => setCount((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCount((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>
        
    </article> : null;

};

export default RiskyBusinessLifeCounter;
