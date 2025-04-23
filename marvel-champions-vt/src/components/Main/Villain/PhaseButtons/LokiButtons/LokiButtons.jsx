import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function LokiButtons() { 
  /* State to keep track of the different Loki form */
  const [remainingLokis, setRemainingLokis] = useState([
    "loki1",
    "loki2",
    "loki3",
    "loki4",
    "loki5",
  ]); 

  const {setPhase} = useContext(PhaseButtonsContext);


  const chooseRandomVillain = () => {
    if (remainingLokis.length === 0) {
      return; /* Exit if there aren't forms left */
    }

    const randomIndex = Math.floor(Math.random() * remainingLokis.length); /* Get a random index from the Loki's array */
    const randomLoki = remainingLokis[randomIndex];

    setRemainingLokis(
      remainingLokis.filter(loki => loki !== randomLoki)
    ); /* Remove the selected form */
    setPhase(randomLoki); /* Set the phase to the selected Loki form */
  }

  return <div id="lokiButtons">

      <button onClick={chooseRandomVillain}>Random Loki</button>

    </div>

}

export default LokiButtons;
