import React from "react";
import {useState} from "react";
import PhaseButtons from "./PhaseButtons";
import LifeCounter from "./LifeCounter";
import CardImage from "./CardImage";
import StatusCards from "./StatusCards";

function Villain () {
  const [phase, setPhase] = useState("phaseI"); /* State to keep track of the phase of the villain */
  
  /* States to keep track of the active Status Cards on the Villain */
  const [toughStatus, setToughStatus] = useState();
  const [confusedStatus, setConfusedStatus] = useState();
  const [stunnedStatus, setStunnedStatus] = useState();


  return <div>
    <PhaseButtons setPhase={setPhase}/> {/* Phase buttons to change the phase of the villain */}
    <LifeCounter />
    <CardImage phase={phase} toughStatus={toughStatus} confusedStatus={confusedStatus} stunnedStatus={stunnedStatus}/> {/* Image of the villain, depending on the phase */}
    <StatusCards setToughStatus={setToughStatus} setConfusedStatus={setConfusedStatus} setStunnedStatus={setStunnedStatus}/>
  </div>;

}

export default Villain;
