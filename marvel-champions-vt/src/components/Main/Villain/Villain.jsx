import React from "react";
import {useState} from "react";
import PhaseButtons from "./PhaseButtons";
import LifeCounter from "./LifeCounter";
import CardImage from "./CardImage";
import StatusCards from "./StatusCards";

function Villain () {
  const [phase, setPhase] = useState("phaseI"); // State to keep track of the phase of the villain.

  return <div>
    <PhaseButtons setPhase={setPhase}/> {/* Phase buttons to change the phase of the villain */}
    <LifeCounter />
    <CardImage phase={phase}/> {/* Image of the villain, depending on the phase */}
    <StatusCards />
  </div>;

}

export default Villain;
