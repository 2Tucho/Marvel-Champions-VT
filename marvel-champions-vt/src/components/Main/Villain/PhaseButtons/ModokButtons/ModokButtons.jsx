import React from "react";
import {useContext} from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function ModokButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="modokButtons">

      <button onClick={() => setPhase("default")}>Normal</button> 
      <button onClick={() => setPhase("B")}>Expert</button>

    </div>

}

export default ModokButtons;
