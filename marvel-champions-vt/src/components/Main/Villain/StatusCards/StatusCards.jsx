import React from "react";
import { useParams } from "react-router-dom";
import GeneralStatusCards from "./GeneralStatusCards/GeneralStatusCards";
import JuggernautStatusCards from "./JuggernautStatusCards/JuggernautStatusCards";

function StatusCards () {
  const villainId = useParams(); /* Get the villainId from the URL parameters */

  /* Map the villainId to the corresponding LifeCounter component */
  const statusCardsComponents = {
    juggernaut: <JuggernautStatusCards />
  };

  return <div>{statusCardsComponents[villainId.villainId] || <GeneralStatusCards />}</div>; {/* Render the status cards component based on the villainId. If no specific are found, render the GeneralStatusCards component. */}

}

export default StatusCards;
