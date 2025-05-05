import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function SinisterSixLifeCounter() {
  /* States to keep their respectives HP */
  const [countDoctorOctopus, setCountDoctorOctopus] = useState(0);
  const [countElectro, setCountElectro] = useState(0);
  const [countHobgoblin, setCountHobgoblin] = useState(0);
  const [countKravenTheHunter, setCountKravenTheHunter] = useState(0);
  const [countScorpion, setCountScorpion] = useState(0);
  const [countVulture, setCountVulture] = useState(0);

  const {phase} = useContext(PhaseButtonsContext);

  const handleInputChange = (e, type) => {
    const value = e.target.value;

    if(type === "doctorOctopus") {
      /* A function to handle the input in case the user wants to change the number manually, so it doesn't return to "0" when the input is empty. */
      if (value === "") {
        setCountDoctorOctopus(value); /* Set the state to an empty string */
      } else {
        setCountDoctorOctopus(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "electro") {
      if (value === "") {
        setCountElectro(value); /* Set the state to an empty string */
      } else {
        setCountElectro(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "hobgoblin") {
      if (value === "") {
        setCountHobgoblin(value); /* Set the state to an empty string */
      } else {
        setCountHobgoblin(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "kravenTheHunter") {
      if (value === "") {
        setCountKravenTheHunter(value); /* Set the state to an empty string */
      } else {
        setCountKravenTheHunter(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else if (type === "scorpion") {
      if (value === "") {
        setCountScorpion(value); /* Set the state to an empty string */
      } else {
        setCountScorpion(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } else {
      if (value === "") {
        setCountVulture(value); /* Set the state to an empty string */
      } else {
        setCountVulture(Number(value)); /* Convert the value to a number, because the input is a string */
      }
    } 
  };

  return <>

      {phase.includes("doctorOctopus") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={countDoctorOctopus} onChange={(e) => handleInputChange(e, "doctorOctopus")} />

        <div>
          <button onClick={() => setCountDoctorOctopus((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountDoctorOctopus((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

      </article> : phase.includes("electro") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={countElectro} onChange={(e) => handleInputChange(e, "electro")} />

        <div>
          <button onClick={() => setCountElectro((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountElectro((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

      </article> : phase.includes("hobgoblin") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={countHobgoblin} onChange={(e) => handleInputChange(e, "hobgoblin")} />

        <div>
          <button onClick={() => setCountHobgoblin((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountHobgoblin((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

  </article> : phase.includes("kravenTheHunter") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={countKravenTheHunter} onChange={(e) => handleInputChange(e, "kravenTheHunter")} />

        <div>
          <button onClick={() => setCountKravenTheHunter((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountKravenTheHunter((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

  </article> : phase.includes("scorpion") ? <article className="lifeCounter">

        <p>HP:</p>

        <input type="number" value={countScorpion} onChange={(e) => handleInputChange(e, "scorpion")} />

        <div>
          <button onClick={() => setCountScorpion((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountScorpion((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>

      </article> : <article className="lifeCounter">
        <p>HP:</p>

        <input type="number" value={countVulture} onChange={(e) => handleInputChange(e, "vulture")} />

        <div>
          <button onClick={() => setCountVulture((count) => count + 1)}> {/* Button to add 1 to the Live counter */}
            +
          </button>
          <button onClick={() => setCountVulture((count) => count - 1)}> {/* Button to substract 1 to the Live counter */}
            -
          </button>
        </div>
      </article>}
    </>;

};

export default SinisterSixLifeCounter;
