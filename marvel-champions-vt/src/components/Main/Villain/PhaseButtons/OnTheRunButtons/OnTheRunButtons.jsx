import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function OnTheRunButtons() { 
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
    const randomIndex = Math.floor(Math.random() * remainingMarauders.length); /* Get a random index from the marauders array */
    const randomMarauder = remainingMarauders[randomIndex];

    setShowVillainButtons(true); /* Set the villain state to true to show the buttons */
    setMarauder(randomMarauder); /* Set the selected villain to the state */

    setPhase(`${randomMarauder}A`); /* Set the phase to the selected villain so the img isn't empty. With randomVillain it does the setPhase at the moment, with the marauder state it wouldn's show */
  };

  return <div id="morlockSiegeButtons">

      <button onClick={chooseRandomVillain}>One Random Villain</button>
      
      {showVillainButtons && ( <div>
          <button onClick={() => setPhase(`${marauder}A`)}>Normal</button>
          <button onClick={() => setPhase(`${marauder}B`)}>Expert</button>
        </div>
      )}

    </div>;

};

export default OnTheRunButtons;
