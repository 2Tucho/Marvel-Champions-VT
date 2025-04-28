import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function FourHorsemenLifeCounter() {
  /* States to keep their respectives HP */
  const [countDeath, setCountDeath] = useState(0);
  const [countFamine, setCountFamine] = useState(0);
  const [countPestilence, setCountPestilence] = useState(0);
  const [countWar, setCountWar] = useState(0);

  const {phase} = useContext(PhaseButtonsContext);

  const handleInputChange = (e, type) => {
    const value = e.target.value;

    if(type === "death") {
      /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
      if (value === "") {
        setCountDeath(value); /* Set the state to an empty string */
      } else {
        setCountDeath(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "famine") {
      if (value === "") {
        setCountFamine(value); /* Set the state to an empty string */
      } else {
        setCountFamine(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "pestilence") {
      if (value === "") {
        setCountPestilence(value); /* Set the state to an empty string */
      } else {
        setCountPestilence(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "war") {
      if (value === "") {
        setCountWar(value); /* Set the state to an empty string */
      } else {
        setCountWar(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else null
    
  };

  return (<>
    {phase.includes("death") ? <div className="lifeCounter">

      <p>HP:</p>

      <input type="number" value={countDeath} onChange={(e) => handleInputChange(e, "death")} />

      <div>
        <button onClick={() => setCountDeath((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountDeath((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>

    </div> : phase.includes("famine") ? <div className="lifeCounter">

      <p>HP:</p>

      <input type="number" value={countFamine} onChange={(e) => handleInputChange(e, "famine")} />

      <div>
        <button onClick={() => setCountFamine((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountFamine((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>

    </div> : phase.includes("pestilence") ? <div className="lifeCounter">
      <p>HP:</p>

      <input type="number" value={countPestilence} onChange={(e) => handleInputChange(e, "pestilence")} />

      <div>
        <button onClick={() => setCountPestilence((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountPestilence((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>

    </div> : <div className="lifeCounter">
      <p>HP:</p>

      <input type="number" value={countWar} onChange={(e) => handleInputChange(e, "war")} />

      <div>
        <button onClick={() => setCountWar((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountWar((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>
    </div>}
  </>);
}

export default FourHorsemenLifeCounter;
