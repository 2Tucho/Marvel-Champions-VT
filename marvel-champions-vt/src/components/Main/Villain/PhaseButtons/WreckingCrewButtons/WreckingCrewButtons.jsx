import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function WreckingCrewButtons() { 
  const [showNormalButtons, setShowNormalButtons] = useState(false); /* State to hide/display the Normal mode buttons */
  const [showExpertButtons, setShowExpertButtons] = useState(false); /* State to hide/display the Expert mode buttons */

  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="wreckingCrewButtons">

      <button id="wreckingCrewNormalButton" onClick={() => {
        setShowNormalButtons(true); /* Toggle the Normal buttons when Normal is selected */ 
        setShowExpertButtons(false); /* Hide the Expert buttons when Normal is selected */
      }}>Normal</button>

      <button id="wreckingCrewExpertButton" onClick={() => {
        setShowExpertButtons(true); /* Toggle the Expert buttons when Expert is selected */
        setShowNormalButtons(false); /* Hide the Normal buttons when Expert is selected */
      }}>Expert</button>

      <article>
        {showNormalButtons && (<div>
          <button id="wreckerA" onClick={() => setPhase("default")}>Wrecker</button>
          <button id="thunderballA" onClick={() => setPhase("thunderballA")}>Thunderball</button> 
          <button id="piledriverA" onClick={() => setPhase("piledriverA")}>Piledriver</button> 
          <button id="bulldozerA" onClick={() => setPhase("bulldozerA")}>Bulldozer</button>
        </div>
          
        )}
        {showExpertButtons && (<div>
          <button id="wreckerB" onClick={() => setPhase("wreckerB")}>Wrecker</button>
          <button id="thunderballB" onClick={() => setPhase("thunderballB")}>Thunderball</button>
          <button id="piledriverB" onClick={() => setPhase("piledriverB")}>Piledriver</button>
          <button id="bulldozerB" onClick={() => setPhase("bulldozerB")}>Bulldozer</button>
        </div>
        )}
      </article>

    </div>

}

export default WreckingCrewButtons;
