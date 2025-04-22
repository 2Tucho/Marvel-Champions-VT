import React from "react";
import {useContext} from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function ThunderboltsButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="thunderboltsButtons">

      <button onClick={() => setPhase("default")}>Normal</button> 
      <button onClick={() => setPhase("B")}>Expert</button>

    </div>

}

export default ThunderboltsButtons;
