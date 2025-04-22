import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function MorlockSiegeButtons() { 
  const [showVillainButtons, setShowVillainButtons] = useState(false); /* State to hide/display the Villain's buttons */
  const [marauder, setMarauder] = useState(""); /* State to keep track of the selected villain */
  const [remainingMarauders, setRemainingMarauders] = useState([
    "arclight",
    "blockbuster",
    "chimera",
    "greycrow",
    "harpoon",
    "riptide",
    "vertigo"
  ]); /* State to keep track of the selected phase */

  const {setPhase} = useContext(PhaseButtonsContext);


  const chooseRandomVillain = () => {
    if (remainingMarauders.length === 0) {
      return; /* Exit if no villains are left */
    }

    const randomIndex = Math.floor(Math.random() * remainingMarauders.length); /* Get a random index from the marauders array */
    const randomVillain = remainingMarauders[randomIndex];

    setShowVillainButtons(true); /* Set the villain state to true to show the buttons */
    setMarauder(randomVillain); /* Set the selected villain to the state */
    setRemainingMarauders(
      remainingMarauders.filter(villain => villain !== randomVillain)
    ); /* Remove the selected villain from the array */
    setPhase(`${randomVillain}A`); /* Set the phase to the selected villain so the img isn't empty. With randomVillain it does the setPhase at the moment, with the marauder state it wouldn's show */
  }

  return <div id="morlockSiegeButtons">

      <button onClick={chooseRandomVillain}>Random Villain</button>
      
      {showVillainButtons && ( <div>
          <button onClick={() => setPhase(`${marauder}A`)}>Normal</button>
          <button onClick={() => setPhase(`${marauder}B`)}>Expert</button>
        </div>
      )}
      
      {/* <button onClick={() => setPhase("default")}>Normal</button> 
      <button onClick={() => setPhase("B")}>Expert</button> */}

    </div>

}

export default MorlockSiegeButtons;
