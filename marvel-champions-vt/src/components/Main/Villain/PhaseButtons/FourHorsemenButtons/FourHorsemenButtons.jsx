import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function FourHorsemenButtons() { 
  const [showNormalButtons, setShowNormalButtons] = useState(true); /* State to hide/display the Normal mode buttons */
  const [showExpertButtons, setShowExpertButtons] = useState(false); /* State to hide/display the Expert mode buttons */
  const [fourHorsemen, setFourHorsemen] = useState([
    "death",
    "famine",
    "pestilence",
    "war"
  ]);
  const {setPhase} = useContext(PhaseButtonsContext);

  const randomHorsemenOrder = (difficulty) => {
    const shuffledHorsemen = [...fourHorsemen].sort(() => Math.random() - 0.5); /* [...] to make a copy and not modify the original. Then .sort() with Math.random to randomize the array. Subtracting 0.5 gives a random number between -0.5 and 0.5. This means the comparator randomly returns positive/negative values, shuffling the array.  
    NOT PERFECT RANDOM. To truly randomize better use the Fisher-Yates algorithm
    
    const shuffled = [...fourHorsemen];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
  }*/
    setFourHorsemen(shuffledHorsemen); // Update the state with the shuffled array

    if (difficulty === "normal") {
      setShowNormalButtons(!showNormalButtons)
    } else if (difficulty === "expert") {
      setShowExpertButtons(!showExpertButtons)
    }
  }

  return <div id="fourHorsemenButtons">

      <button id="horsemenNormalButton" onClick={() => {
        randomHorsemenOrder("normal"); 
        setShowExpertButtons(false); /* Hide the Expert buttons when Normal is selected */
      }}>Normal</button>
      <button id="horsemenExpertButton" onClick={() => {
        randomHorsemenOrder("expert");
        setShowNormalButtons(false); /* Hide the Normal buttons when Expert is selected */
        }}>Expert</button>

      <article>
        {showNormalButtons && fourHorsemen.map((horseman) => (
          <button key={horseman} onClick={() => setPhase(`${horseman}A`)}>{horseman[0].toUpperCase() + horseman.slice(1)}</button>
        ))}
        {showExpertButtons && fourHorsemen.map((horseman) => (
            <button key={horseman} onClick={() => setPhase(`${horseman}B`)}>{horseman[0].toUpperCase() + horseman.slice(1)}</button>
        ))}
      </article>

    </div>

}

export default FourHorsemenButtons;
