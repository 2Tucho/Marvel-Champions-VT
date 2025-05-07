import React from "react";
import { useContext } from "react";
import { StatusCardsContext } from "../../../../../../context/StatusCardsContext";

function GeneralStatusTokens() {
  const { toughStatus, confusedStatus, stunnedStatus, setToughStatus, setConfusedStatus, setStunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */

  return <article id="statusTokensContainer">
    {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
    {toughStatus && (
      <img id="toughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token"/>
    )}
    {confusedStatus && (
      <img id="confusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
    )}
    {stunnedStatus && (
      <img id="stunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
    )}
  </article>;

}

export default GeneralStatusTokens;
