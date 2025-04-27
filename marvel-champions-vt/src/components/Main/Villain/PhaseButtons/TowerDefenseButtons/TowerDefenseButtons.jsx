import React from "react";
import { useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function TowerDefenseButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="towerDefenseButtons">

      <article>
        <button onClick={() => setPhase("default")}>Corvus Glaive I</button> 
        <button onClick={() => setPhase("corvusII")}>Corvus Glaive II</button>
        <button onClick={() => setPhase("corvusIII")}>Corvus Glaive III</button>
      </article>

      <article>
        <button onClick={() => setPhase("proximaI")}>Proxima Midnight I</button> 
        <button onClick={() => setPhase("proximaII")}>Proxima Midnight II</button>
        <button onClick={() => setPhase("proximaIII")}>Proxima Midnight III</button>
      </article>

    </div>

}

export default TowerDefenseButtons;
