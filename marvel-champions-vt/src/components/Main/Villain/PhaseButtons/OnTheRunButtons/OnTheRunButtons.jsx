import React from "react";
import { useState, useContext, useRef, useEffect } from "react";
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

  /* List of refs to access if the checkboxes are checked or not */
  const arclightCheck = useRef();
  const blockbusterCheck = useRef();
  const chimeraCheck = useRef();
  const greycrowCheck = useRef();
  const harpoonCheck = useRef();
  const riptideCheck = useRef();
  const vertigoCheck = useRef();

  const { setPhase } = useContext(PhaseButtonsContext);

  /* Function to hide and display the Marauders defeated list */
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

  /* To track the changes in the checkboxes and mantain uploaded the maraudersList */
  const handleMaraudersChecked = marauder => {
    const marauderRefs = {
      arclight: arclightCheck,
      blockbuster: blockbusterCheck,
      chimera: chimeraCheck,
      greycrow: greycrowCheck,
      harpoon: harpoonCheck,
      riptide: riptideCheck,
      vertigo: vertigoCheck,
    };

    const ref = marauderRefs[marauder];
    if (ref.current.checked) {
      setMaraudersList(maraudersList.filter(elem => elem !== marauder))
    } else {
      /* Add the marauder back when the ref.current.checked is false */
      if (!maraudersList.includes(marauder)) {
        setMaraudersList([...maraudersList, marauder]);
      }
    }
  }

  // useEffect(() => {
  //   if (arclightCheck.current.checked) {
  //     setMaraudersList(maraudersList.filter(elem => elem !== "arclight"))
  //   } else if (!arclightCheck.current.checked) {
  //     setMaraudersList([...maraudersList], "arclight")
  //   }
  // }, [arclightCheck.current.checked])

  return <div id="onTheRunButtons">

    <h4 onClick={toggleMaraudersDefeated}>Defeated Marauders</h4>
    <p>?</p>
    {maraudersDefeatedList && <form action="">
      <label htmlFor="arclight">Arclight</label><input type="checkbox" name="arclight" id="arclightCheckbox" ref={arclightCheck} checked={!maraudersList.includes("arclight")} /*  */ onChange={() => handleMaraudersChecked("arclight")} />
      <label htmlFor="blockbuster">Blockbuster</label><input type="checkbox" name="blockbuster" id="blockbusterCheckbox" ref={blockbusterCheck} checked={!maraudersList.includes("blockbuster")} onChange={() => handleMaraudersChecked("blockbuster")} />
      <label htmlFor="chimera">Chimera</label><input type="checkbox" name="chimera" id="chimeraCheckbox" ref={chimeraCheck} checked={!maraudersList.includes("chimera")} onChange={() => handleMaraudersChecked("chimera")} />
      <label htmlFor="greycrow">Greycrow</label><input type="checkbox" name="greycrow" id="greycrowtCheckbox" ref={greycrowCheck} checked={!maraudersList.includes("greycrow")} onChange={() => handleMaraudersChecked("greycrow")} />
      <label htmlFor="harpoon">Harpoon</label><input type="checkbox" name="harpoon" id="harpoonCheckbox" ref={harpoonCheck} checked={!maraudersList.includes("harpoon")} onChange={() => handleMaraudersChecked("harpoon")} />
      <label htmlFor="riptide">Riptide</label><input type="checkbox" name="riptide" id="riptideCheckbox" ref={riptideCheck} checked={!maraudersList.includes("riptide")} onChange={() => handleMaraudersChecked("riptide")} />
      <label htmlFor="vertigo">Vertigo</label><input type="checkbox" name="vertigo" id="vertigoCheckbox" ref={vertigoCheck} checked={!maraudersList.includes("vertigo")} onChange={() => handleMaraudersChecked("vertigo")} />
    </form>}

    <button onClick={chooseRandomVillain}>One Random Villain</button>

    {showVillainButtons && (<div>
      <button onClick={() => setPhase(`${marauder}A`)}>Normal</button>
      <button onClick={() => setPhase(`${marauder}B`)}>Expert</button>
    </div>
    )}

  </div>;

};

export default OnTheRunButtons;
