import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function SinisterSixButtons() { 
  const [sinisterSix, setSinisterSix] = useState([
    "doctorOctopus",
    "electro",
    "hobgoblin",
    "kravenTheHunter",
    "scorpion",
    "vulture"
  ]); /* State to keep track of the selected phase */

  const [doctorOctopus, setDoctorOctopus] = useState(false); /* State to show/hide Doctor Octopus' button */
  const [electro, setElectro] = useState(false); /* State to show/hide Electro's button */
  const [hobgoblin, setHobgoblin] = useState(false); /* State to show/hide Hobgoblin's button */
  const [kravenTheHunter, setKravenTheHunter] = useState(false); /* State to show/hide Kraven The Hunter's button */
  const [scorpion, setScorpion] = useState(false); /* State to show/hide Scorpion's button */
  const [vulture, setVulture] = useState(false); /* State to show/hide Vulture's button */


  const {setPhase} = useContext(PhaseButtonsContext);


  const getRandomVillain = () => {
    if (sinisterSix.length === 0) {
      return; /* Exit if no villains are left */
    }

    const randomIndex = Math.floor(Math.random() * sinisterSix.length); /* Get a random index from the marauders array */
    const sinisterSixVillain = sinisterSix[randomIndex];

    setSinisterSix(sinisterSix.filter(villain => villain !== sinisterSixVillain)); /* Remove the selected villain from the array */
    setPhase(sinisterSixVillain); /* Set the phase to the selected villain so the img isn't empty. With randomVillain it does the setPhase at the moment, with the marauder state it wouldn's show */

    newVillainButton(sinisterSixVillain) /* Call to the function that creates a button for each Villain clicked */
  }

  const newVillainButton = (villain) => {
    if (villain === "doctorOctopus") {
      setDoctorOctopus(!doctorOctopus); 
    } else if (villain === "electro") {
      setElectro(!electro); 
    } else if (villain === "hobgoblin") {
      setHobgoblin(!hobgoblin); 
    } else if (villain === "kravenTheHunter") {
      setKravenTheHunter(!kravenTheHunter); 
    } else if (villain === "scorpion") {
      setScorpion(!scorpion); 
    } else if (villain === "vulture") {
      setVulture(!vulture); 
    } else null
  }

  return <div id="sinisterSixButtons">

    <article>
      <h3>Sinister Six</h3>
      <ul>
        <li>1 - Doctor Octopus</li>
        <li>2 - Electro</li>
        <li>3 - Hobgoblin</li>
        <li>4 - Kraven The Hunter</li>
        <li>5 - Scorpion</li>
        <li>6 - Vulture</li>
      </ul>
    </article>

    <button onClick={getRandomVillain}>Random Villain</button>

    <article>
      {doctorOctopus && <button onClick={() => setPhase("doctorOctopus")}>Doctor Octopus</button>}
      {electro && <button onClick={() => setPhase("electro")}>Electro</button>}
      {hobgoblin && <button onClick={() => setPhase("hobgoblin")}>Hobgoblin</button>}
      {kravenTheHunter && <button onClick={() => setPhase("kravenTheHunter")}>Kraven The Hunter</button>}
      {scorpion && <button onClick={() => setPhase("scorpion")}>Scorpion</button>}
      {vulture && <button onClick={() => setPhase("vulture")}>Vulture</button>}
    </article>

    </div>

}

export default SinisterSixButtons;
