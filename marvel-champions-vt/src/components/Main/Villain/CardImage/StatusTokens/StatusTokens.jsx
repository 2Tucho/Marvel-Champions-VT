import React from "react";
import { useContext } from "react";
import { useParams } from "react-router-dom";

import { StatusCardsContext } from "../../../../../context/StatusCardsContext";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function StatusTokens() {
  const { toughStatus, confusedStatus, stunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */
  const { phase } = useContext(PhaseButtonsContext);

  const villainId = useParams(); /* Get the villainId from the URL parameters */

  return (villainId.villainId === "riskyBusiness" && !phase.includes("B") ? null : ( /* If the Villain is RiskyBusiness and not the B phase I want to hide the buttons */
      <article id="statusTokensContainer">
        {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
        {toughStatus && (
          <img id="toughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />
        )}
        {confusedStatus && (
          <img id="confusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
        )}
        {stunnedStatus && (
          <img id="stunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
        )}
      </article>
    )
  );

}

export default StatusTokens;
