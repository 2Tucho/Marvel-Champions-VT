import React from "react";
import {useContext} from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function RiskyBusinessButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div>
    
    <div>

      {/*  setPhase is wrapped in a function so that they are only executed when the buttons are clicked, not during the render phase*/}
      <article>
        <button className="phaseIA" onClick={() => setPhase("default")}>Norman Osborn I</button> 
        <button className="phaseIB" onClick={() => setPhase("phaseIB")}>Green Goblin I</button>
      </article>

      <article>
        <button className="phaseIIA" onClick={() => setPhase("phaseIIA")}>Norman Osborn II</button> 
        <button className="phaseIIB" onClick={() => setPhase("phaseIIB")}>Green Goblin II</button>
      </article>

      <article>
        <button className="phaseIIIA" onClick={() => setPhase("phaseIIIA")}>Norman Osborn III</button> 
        <button className="phaseIIIB" onClick={() => setPhase("phaseIIIB")}>Green Goblin III</button>
      </article>

    </div>

  </div>;

}

export default RiskyBusinessButtons;
