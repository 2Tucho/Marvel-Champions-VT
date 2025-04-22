import React from "react";
import {useContext} from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function ApocalypseButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="apocalypseButtons">

      <button onClick={() => setPhase("default")}>Phase I</button> 
      <button onClick={() => setPhase("phaseII")}>Phase II</button>
      <button onClick={() => setPhase("phaseIII")}>Phase III</button> 
      <button onClick={() => setPhase("phaseIV")}>Phase IV</button>

    </div>

}

export default ApocalypseButtons;
