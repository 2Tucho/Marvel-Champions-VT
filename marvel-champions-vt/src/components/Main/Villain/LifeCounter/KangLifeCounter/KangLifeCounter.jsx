import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function KangLifeCounter() {
  /* States to keep their respectives HP */
  const [countPhaseI, setCountPhaseI] = useState(0);
  const [countPhaseIII, setCountPhaseIII] = useState(0);
  const [countImmortus, setCountImmortus] = useState(0);
  const [countIronlad, setCountIronlad] = useState(0);
  const [countRamatut, setCountRamatut] = useState(0);
  const [countScarletcenturion, setCountScarletcenturion] = useState(0);

  const {phase} = useContext(PhaseButtonsContext);

  const handleInputChange = (e, type) => {
    const value = e.target.value;

    if(type === "immortus") {
      /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
      if (value === "") {
        setCountImmortus(value); /* Set the state to an empty string */
      } else {
        setCountImmortus(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "ironlad") {
      if (value === "") {
        setCountIronlad(value); /* Set the state to an empty string */
      } else {
        setCountIronlad(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "ramatut") {
      if (value === "") {
        setCountRamatut(value); /* Set the state to an empty string */
      } else {
        setCountRamatut(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "scarletcenturion") {
      if (value === "") {
        setCountScarletcenturion(value); /* Set the state to an empty string */
      } else {
        setCountScarletcenturion(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "phaseIII") {
      if (value === "") {
        setCountPhaseIII(value); /* Set the state to an empty string */
      } else {
        setCountPhaseIII(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else {
      if (value === "") {
        setCountPhaseI(value); /* Set the state to an empty string */
      } else {
        setCountPhaseI(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    }
    
  };

  return (<>
    {phase.includes("phaseIII") ? <div className="lifeCounter">

      <p>HP:</p>

      <input type="number" value={countPhaseIII} onChange={(e) => handleInputChange(e, "phaseIII")} />

      <div>
        <button onClick={() => setCountPhaseIII((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountPhaseIII((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>

    </div> : phase.includes("immortus") ? <div className="lifeCounter">

      <p>HP:</p>

      <input type="number" value={countImmortus} onChange={(e) => handleInputChange(e, "immortus")} />

      <div>
        <button onClick={() => setCountImmortus((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountImmortus((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>

    </div> : phase.includes("ironlad") ? <div className="lifeCounter">

      <p>HP:</p>

      <input type="number" value={countIronlad} onChange={(e) => handleInputChange(e, "ironlad")} />

      <div>
        <button onClick={() => setCountIronlad((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountIronlad((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>

    </div> : phase.includes("ramatut") ? <div className="lifeCounter">
      <p>HP:</p>

      <input type="number" value={countRamatut} onChange={(e) => handleInputChange(e, "ramatut")} />

      <div>
        <button onClick={() => setCountRamatut((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountRamatut((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>

    </div> : phase.includes("scarletcenturion") ? <div className="lifeCounter">
      <p>HP:</p>

      <input type="number" value={countScarletcenturion} onChange={(e) => handleInputChange(e, "scarletcenturion")} />

      <div>
        <button onClick={() => setCountScarletcenturion((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountScarletcenturion((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>
    </div> : <div className="lifeCounter">
      <p>HP:</p>

      <input type="number" value={countPhaseI} onChange={(e) => handleInputChange(e, "")} />

      <div>
        <button onClick={() => setCountPhaseI((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
          +
        </button>
        <button onClick={() => setCountPhaseI((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
          -
        </button>
      </div>
    </div>}
  </>);
}

export default KangLifeCounter;
