import React from "react";
import PhaseButtons from "./PhaseButtons";
import LifeCounter from "./LifeCounter";
import CardImage from "./CardImage";
import StatusCards from "./StatusCards";

function Villain () {

  return <div>
    <PhaseButtons />
    <LifeCounter />
    <CardImage />
    <StatusCards />
  </div>;

}

export default Villain;
