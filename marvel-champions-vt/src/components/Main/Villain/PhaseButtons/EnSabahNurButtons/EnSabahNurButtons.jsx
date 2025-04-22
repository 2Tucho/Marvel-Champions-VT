import React from "react";
import {useContext} from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function EnSabahNurButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="enSabahNurButtons">

      <article>
        <button onClick={() => setPhase("default")}>Biomorph I</button> 
        <button onClick={() => setPhase("phaseIB")}>Cyberpath I</button>
        <button onClick={() => setPhase("phaseIC")}>Giant I</button>
      </article>

      <article>
        <button onClick={() => setPhase("phaseIIA")}>Biomorph II</button> 
        <button onClick={() => setPhase("phaseIIB")}>Cyberpath II</button>
        <button onClick={() => setPhase("phaseIIC")}>Giant II</button>
      </article>

      <article>
        <button onClick={() => setPhase("phaseIIIA")}>Biomorph III</button> 
        <button onClick={() => setPhase("phaseIIIB")}>Cyberpath III</button>
        <button onClick={() => setPhase("phaseIIIC")}>Giant III</button>
      </article>

    </div>

}

export default EnSabahNurButtons;
