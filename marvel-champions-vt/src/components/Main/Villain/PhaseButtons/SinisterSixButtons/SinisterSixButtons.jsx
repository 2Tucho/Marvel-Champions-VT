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

  /* State to control modal visibility */
  const [showModal, setShowModal] = useState(false);

  const { setPhase } = useContext(PhaseButtonsContext);

  /* Function to handle click to a Villain in the Legend. If false it should add the Villain to sinisterSix again so it can get from the random button */
  const toggleVillain = (villain, isSelected) => {
    if (isSelected) {
      // Remove the villain from the sinisterSix array
      setSinisterSix(sinisterSix.filter((v) => v !== villain));
    } else {
      // Add the villain to the sinisterSix array
      setSinisterSix([...sinisterSix, villain]);
    }
  };

  const getRandomVillain = () => {
    if (sinisterSix.length === 0) {
      return /* Exit if no villains are left */
    };

    const randomIndex = Math.floor(Math.random() * sinisterSix.length); /* Get a random index from the marauders array */
    const sinisterSixVillain = sinisterSix[randomIndex];

    setSinisterSix(sinisterSix.filter(villain => villain !== sinisterSixVillain)); /* Remove the selected villain from the array */
    setPhase(sinisterSixVillain); /* Set the phase to the selected villain so the img isn't empty. With randomVillain it does the setPhase at the moment, with the marauder state it wouldn's show */

    newVillainButton(sinisterSixVillain); /* Call to the function that creates a button for each Villain clicked */
  }

  /* This function changes the state of the Villain to true, so it respective button appears */
  const newVillainButton = (villain) => {
    if (villain === "doctorOctopus") {
      setDoctorOctopus(true);
    } else if (villain === "electro") {
      setElectro(true);
    } else if (villain === "hobgoblin") {
      setHobgoblin(true);
    } else if (villain === "kravenTheHunter") {
      setKravenTheHunter(true);
    } else if (villain === "scorpion") {
      setScorpion(true);
    } else if (villain === "vulture") {
      setVulture(true);
    } else null
  };

  return <div id="sinisterSixButtons">
    <article id="sinisterSixLegend">

      <div>
        <h3>Sinister Six</h3>
        <p onClick={() => setShowModal(true)}>?</p>
      </div>

      <ul>
        <li
          onClick={() => {
            const newState = !doctorOctopus; /* Calculate the new state */
            setDoctorOctopus(newState); /* Update the state */
            toggleVillain("doctorOctopus", newState); /* Pass the new state to toggleVillain */
          }}>
          1 - Doctor Octopus
        </li>

        <li
          onClick={() => {
            const newState = !electro;
            setElectro(newState);
            toggleVillain("electro", newState);
          }}>
          2 - Electro
        </li>

        <li
          onClick={() => {
            const newState = !hobgoblin;
            setHobgoblin(newState);
            toggleVillain("hobgoblin", newState);
          }}>
          3 - Hobgoblin
        </li>

        <li
          onClick={() => {
            const newState = !kravenTheHunter;
            setKravenTheHunter(newState);
            toggleVillain("kravenTheHunter", newState);
          }}>
          4 - Kraven The Hunter
        </li>

        <li
          onClick={() => {
            const newState = !scorpion;
            setScorpion(newState);
            toggleVillain("scorpion", newState);
          }}>
          5 - Scorpion
        </li>

        <li
          onClick={() => {
            const newState = !vulture;
            setVulture(newState);
            toggleVillain("vulture", newState);
          }}>
          6 - Vulture
        </li>
      </ul>

    </article>

    <article id="sinisterSixButtonsContainer">

      <button onClick={getRandomVillain}>Random Villain</button>

      <div>
        {doctorOctopus && <button onClick={() => setPhase("doctorOctopus")}>Doctor Octopus</button>}
        {electro && <button onClick={() => setPhase("electro")}>Electro</button>}
        {hobgoblin && <button onClick={() => setPhase("hobgoblin")}>Hobgoblin</button>}
        {kravenTheHunter && <button onClick={() => setPhase("kravenTheHunter")}>Kraven The Hunter</button>}
        {scorpion && <button onClick={() => setPhase("scorpion")}>Scorpion</button>}
        {vulture && <button onClick={() => setPhase("vulture")}>Vulture</button>}
      </div>

    </article>

    {/* Modal */}
    {showModal && (
      <div id="sinisterSixModal">
        <div>
          <h3>Sinister Six Info</h3>
          <button onClick={() => setShowModal(false)}>X</button>
        </div>
        <p>Here you have the order of activation of the Villains. Also, if you click on any Villain it will appear as an active with its respective button to handle it. To erase a Villain you only have to click it in the list.</p>
      </div>
    )}

  </div>;
};

export default SinisterSixButtons;
