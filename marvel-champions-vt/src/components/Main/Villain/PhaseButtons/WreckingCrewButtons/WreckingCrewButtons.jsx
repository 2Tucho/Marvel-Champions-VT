import React from "react";
import {useContext} from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function WreckingCrewButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  return <div id="wreckingCrewButtons">

      <article>
        <button id="wreckerA" onClick={() => setPhase("default")}>Wrecker A</button> 
        <button id="wreckerB" onClick={() => setPhase("wreckerB")}>Wrecker B</button>
      </article>

      <article>
        <button id="thunderballA" onClick={() => setPhase("thunderballA")}>Thunderball A</button> 
        <button id="thunderballB" onClick={() => setPhase("thunderballB")}>Thunderball B</button>
      </article>

      <article>
        <button id="piledriverA" onClick={() => setPhase("piledriverA")}>Piledriver A</button> 
        <button id="piledriverB" onClick={() => setPhase("piledriverB")}>Piledriver B</button>
      </article>

      <article>
        <button id="bulldozerA" onClick={() => setPhase("bulldozerA")}>Bulldozer A</button> 
        <button id="bulldozerB" onClick={() => setPhase("bulldozerB")}>Bulldozer B</button>
      </article>

    </div>

}

export default WreckingCrewButtons;
