import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function OnTheRunButtons() { 
  const [showVillainButtons, setShowVillainButtons] = useState(false); /* State to hide/display the Villain's buttons */
  const [marauder, setMarauder] = useState(""); /* State to keep track of the selected villain */
  const [maraudersList, setMaraudersList] = useState([
    "arclight",
    "blockbuster",
    "chimera",
    "greycrow",
    "harpoon",
    "riptide",
    "vertigo"
  ]); /* State to keep track of the selected phase */
  const [maraudersDefeatedList, setMaraudersDefeatedList] = useState(false); /* State to hide/display the list to choose the Marauders defeated */
  
  const {setPhase} = useContext(PhaseButtonsContext);
  

  const toggleMaraudersDefeated = () => {
    setMaraudersDefeatedList(!maraudersDefeatedList);
  }

  const chooseRandomVillain = () => {
    const randomIndex = Math.floor(Math.random() * maraudersList.length); /* Get a random index from the marauders array */
    const randomMarauder = maraudersList[randomIndex];

    setShowVillainButtons(true); /* Set the villain state to true to show the buttons */
    setMarauder(randomMarauder); /* Set the selected villain to the state */

    setPhase(`${randomMarauder}A`); /* Set the phase to the selected villain so the img isn't empty. With randomVillain it does the setPhase at the moment, with the marauder state it wouldn's show */
  };

  return <div id="morlockSiegeButtons">

      <h4 onClick={toggleMaraudersDefeated}>Defeated Marauders</h4>
      <p>?</p>
      {maraudersDefeatedList && <form action="">
        <label htmlFor="arclight">Arclight</label><input type="checkbox" name="arclight" id="arclightCheckbox" ref={arclightRef} />
        <label htmlFor="blockbuster">Blockbuster</label><input type="checkbox" name="blockbuster" id="blockbusterCheckbox" />
        <label htmlFor="chimera">Chimera</label><input type="checkbox" name="chimera" id="chimeraCheckbox" />
        <label htmlFor="greycrow">Greycrow</label><input type="checkbox" name="greycrow" id="greycrowtCheckbox" />
        <label htmlFor="riptide">Riptide</label><input type="checkbox" name="riptide" id="riptideCheckbox" />
        <label htmlFor="vertigo">Vertigo</label><input type="checkbox" name="vertigo" id="vertigoCheckbox" />
      </form>}

      <button onClick={chooseRandomVillain}>One Random Villain</button>
      
      {showVillainButtons && ( <div>
          <button onClick={() => setPhase(`${marauder}A`)}>Normal</button>
          <button onClick={() => setPhase(`${marauder}B`)}>Expert</button>
        </div>
      )}

    </div>;

};

export default OnTheRunButtons;
