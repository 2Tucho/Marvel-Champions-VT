import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function TowerDefenseLifeCounter() {
  const [countCorvus, setCountCorvus] = useState(0);
  const [countProxima, steCountProxima] = useState(0);

  const {phase} = useContext(PhaseButtonsContext);

  const handleInputChange = (e, type) => {
    const value = e.target.value;

    if(type === "proxima") {
      /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
      if (value === "") {
        steCountProxima(value); /* Set the state to an empty string */
      } else {
        steCountProxima(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else {
      /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
      if (value === "") {
        setCountCorvus(value); /* Set the state to an empty string */
      } else {
        setCountCorvus(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    }
    
  };

  return (<div className="lifeCounter">

      {phase.includes("proxima") ? <div>

        <p>HP:</p>

        <input type="number" value={countProxima} onChange={(e) => handleInputChange(e, "proxima")} />

        <div>
          <button onClick={() => steCountProxima((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => steCountProxima((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

      </div> : <div>

        <p>HP:</p>

        <input type="number" value={countCorvus} onChange={(e) => handleInputChange(e, "corvus")} />

        <div>
          <button onClick={() => setCountCorvus((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountCorvus((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>
      </div>}
      
  </div>
  );
}

export default TowerDefenseLifeCounter;
