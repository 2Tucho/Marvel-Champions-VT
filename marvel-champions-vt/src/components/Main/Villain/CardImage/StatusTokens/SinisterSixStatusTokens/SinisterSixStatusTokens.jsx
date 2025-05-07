import React from "react";
import { useContext } from "react";
import { StatusCardsContext } from "../../../../../../context/StatusCardsContext";

function SinisterSixStatusTokens() {
  const { toughStatus, confusedStatus, stunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */

  return <article className="sinisterSixTokens">
  {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
  {toughStatus && (
    <img id="sinisterSixToughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />
  )}
  {confusedStatus && (
    <img id="sinisterSixConfusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
  )}
  {stunnedStatus && (
    <img id="sinisterSixStunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
  )}
</article>;

};

export default SinisterSixStatusTokens;
