import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function MorlockSiegeButtons() { 
  const [villainMode, setVillainMode] = useState("normal"); /* State to hide/display the Villain's buttons */
  const [marauders, setMarauders] = useState([
    "arclight",
    "blockbuster",
    "chimera",
    "greycrow",
    "harpoon",
    "riptide",
    "vertigo"
  ]);

  const {setPhase} = useContext(PhaseButtonsContext);

  const chooseRandomVillain = () => {
    if (marauders.length === 0) {
      return /* Exit if no villains are left */
    };

    const randomIndex = Math.floor(Math.random() * marauders.length); /* Get a random index from the marauders array */
    const randomMarauder = marauders[randomIndex];

    setMarauders(marauders.filter(villain => villain !== randomMarauder)); /* Remove the selected villain from the array */
    setPhase(`${randomMarauder}${villainMode == "normal" ? "A" : villainMode == "expert" ? "B" : null}`); /* Set the phase to the selected villain so the img isn't empty. With randomVillain it does the setPhase at the moment, with the marauder state it wouldn's show */
  };

  return <div id="morlockSiegeButtons">

      <article id="MorlockSiegeModeButtons">
        <button onClick={() => {
          setVillainMode("normal");
          setMarauders([
            "arclight",
            "blockbuster",
            "chimera",
            "greycrow",
            "harpoon",
            "riptide",
            "vertigo"
          ]); /* Reset the array to the original state */
          }}>Normal</button>
        <button onClick={() => {
          setVillainMode("expert");
          setMarauders([
            "arclight",
            "blockbuster",
            "chimera",
            "greycrow",
            "harpoon",
            "riptide",
            "vertigo"
          ]); /* Reset the array to the original state */
          }}>Expert</button>
      </article>

      <button onClick={() => chooseRandomVillain()}>Random Villain</button>

    </div>

}

export default MorlockSiegeButtons;
