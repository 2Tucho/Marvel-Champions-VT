import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function WreckingCrewLifeCounter() {
  /* States to keep their respectives HP */
  const [countBulldozer, setCountBulldozer] = useState(0);
  const [countPileDriver, setCountPileDriver] = useState(0);
  const [countThunderball, setCountThunderball] = useState(0);
  const [countWrecker, setCountWrecker] = useState(0);

  const {phase} = useContext(PhaseButtonsContext);

  const handleInputChange = (e, type) => {
    const value = e.target.value;

    if(type === "bulldozer") {
      /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
      if (value === "") {
        setCountBulldozer(value); /* Set the state to an empty string */
      } else {
        setCountBulldozer(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "piledriver") {
      if (value === "") {
        setCountPileDriver(value); /* Set the state to an empty string */
      } else {
        setCountPileDriver(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "thunderball") {
      if (value === "") {
        setCountThunderball(value); /* Set the state to an empty string */
      } else {
        setCountThunderball(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else {
      if (value === "") {
        setCountWrecker(value); /* Set the state to an empty string */
      } else {
        setCountWrecker(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    }
    
  };

  return <>

      {phase.includes("bulldozer") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={countBulldozer} onChange={(e) => handleInputChange(e, "bulldozer")} />

        <div>
          <button onClick={() => setCountBulldozer((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountBulldozer((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

      </article> : phase.includes("piledriver") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={countPileDriver} onChange={(e) => handleInputChange(e, "piledriver")} />

        <div>
          <button onClick={() => setCountPileDriver((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountPileDriver((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

      </article> : phase.includes("thunderball") ? <article className="lifeCounter">
        <p>HP:</p>

        <input type="number" value={countThunderball} onChange={(e) => handleInputChange(e, "thunderball")} />

        <div>
          <button onClick={() => setCountThunderball((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountThunderball((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

      </article> : <article className="lifeCounter">
        <p>HP:</p>

        <input type="number" value={countWrecker} onChange={(e) => handleInputChange(e, "wrecker")} />

        <div>
          <button onClick={() => setCountWrecker((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountWrecker((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>
      </article>}
    </>;

};

export default WreckingCrewLifeCounter;
