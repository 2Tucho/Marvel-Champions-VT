import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function MansionAttackButtons() { 
  const [villainMode, setVillainMode] = useState("normal"); /* State to hide/display the Villain's buttons */
  const [brotherhood, setBrotherhood] = useState([
    "avalanche",
    "blob",
    "pyro",
    "toad"
  ]);

  const {setPhase} = useContext(PhaseButtonsContext);

  const chooseRandomVillain = () => {
    if (brotherhood.length === 0) {
      return; /* Exit if no villains are left */
    }

    const randomIndex = Math.floor(Math.random() * brotherhood.length); /* Get a random index from the marauders array */
    const randomBrotherhood = brotherhood[randomIndex];

    setBrotherhood(
      brotherhood.filter(villain => villain !== randomBrotherhood)
    ); /* Remove the selected villain from the array */
    setPhase(`${randomBrotherhood}${villainMode == "normal" ? "A" : villainMode == "expert" ? "B" : null}`); /* Set the phase to the selected villain so the img isn't empty. With randomVillain it does the setPhase at the moment, with the marauder state it wouldn's show */
  }

  return <div id="mansionAttackButtons">

      <article id="mansionAttackModeButtons">
        <button onClick={() => {
          setVillainMode("normal");
          setBrotherhood([
            "avalanche",
            "blob",
            "pyro",
            "toad"
          ]); /* Reset the array to the original state */
          }}>Normal</button>
        <button onClick={() => {
          setVillainMode("expert");
          setBrotherhood([
            "avalanche",
            "blob",
            "pyro",
            "toad"
          ]); /* Reset the array to the original state */
          }}>Expert</button>
      </article>

      <button onClick={() => chooseRandomVillain()}>Random Villain</button>

    </div>

}

export default MansionAttackButtons;
