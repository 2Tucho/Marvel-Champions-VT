import React from "react";
import { useContext } from "react";
import { StatusCardsContext } from "../../../../../../context/StatusCardsContext";
import { PhaseButtonsContext } from "../../../../../../context/PhaseButtonsContext";

function RiskyBusinessStatusTokens() {
  const { toughStatus, confusedStatus, stunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */
  const { phase } = useContext(PhaseButtonsContext);

  return (phase.includes("B") ? <article className="riskyBusinessTokens">
  {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
  {toughStatus && (
    <img id="greenGoblinToughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />
  )}
  {confusedStatus && (
    <img id="greenGoblinConfusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
  )}
  {stunnedStatus && (
    <img id="greenGoblinStunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
  )}
</article> : <article id="riskyBusinessTokens">
    {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
    {toughStatus && (
      <img id="normanOsbornToughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />
    )}
    {confusedStatus && (
      <img id="normanOsbornConfusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
    )}
    {stunnedStatus && (
    <img id="normanOsbornStunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
  )}
  </article>);

}

export default RiskyBusinessStatusTokens;
