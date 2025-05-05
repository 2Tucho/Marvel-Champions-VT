import React from "react";
import { useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function SpiralButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="spiralButtons">

    <article>
      <button className="phaseIA" onClick={() => setPhase("default")}>Escaped I</button> 
      <button className="phaseIB" onClick={() => setPhase("phaseIB")}>Cornered I</button>
    </article>

    <article>
      <button className="phaseIIA" onClick={() => setPhase("phaseIIA")}>Escaped II</button> 
      <button className="phaseIIB" onClick={() => setPhase("phaseIIB")}>Cornered II</button>
    </article>

    <article>
      <button className="phaseIIIA" onClick={() => setPhase("phaseIIIA")}>Escaped III</button> 
      <button className="phaseIIIB" onClick={() => setPhase("phaseIIIB")}>Cornered III</button>
    </article>

  </div>;

};

export default SpiralButtons;
