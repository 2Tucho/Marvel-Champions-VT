import React from "react";
import { useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function MagogButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="magogButtons">

      <button onClick={() => setPhase("default")}>Normal</button> 
      <button onClick={() => setPhase("B")}>Expert</button>

    </div>;

};

export default MagogButtons;
