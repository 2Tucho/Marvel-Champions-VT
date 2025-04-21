import React from "react";
import {useState} from "react";
import { PhaseButtonsContext } from "../../../context/PhaseButtonsContext";
import PhaseButtons from "./PhaseButtons";
import LifeCounter from "./LifeCounter";
import CardImage from "./CardImage";
import StatusCards from "./StatusCards";

function Villain () {
  /* State to keep track of the phase of the villain */
  const [phase, setPhase] = useState("phaseI");
  
  /* States to keep track of the active Status Cards on the Villain */
  const [toughStatus, setToughStatus] = useState();
  const [confusedStatus, setConfusedStatus] = useState();
  const [stunnedStatus, setStunnedStatus] = useState();

  return <div>
    <PhaseButtonsContext.Provider value={{phase, setPhase}}>
      <PhaseButtons/>
      <CardImage phase={phase} toughStatus={toughStatus} confusedStatus={confusedStatus} stunnedStatus={stunnedStatus}/> {/* Image of the villain, depending on the phase */}
    </PhaseButtonsContext.Provider>

    <LifeCounter />
    <StatusCards setToughStatus={setToughStatus} setConfusedStatus={setConfusedStatus} setStunnedStatus={setStunnedStatus}/>
  </div>;

}

export default Villain;
