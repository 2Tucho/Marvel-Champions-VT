import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PhaseButtonsContext } from "../../../../context/PhaseButtonsContext";
import { StatusCardsContext } from "../../../../context/StatusCardsContext";
import JuggernautMomentumCounters from "./JuggernautMomentumCounters/JuggernautMomentumCounters";
import SpiralTeleportCounters from "./SpiralTeleportCounters/SpiralTeleportCounters";

function CardImage() {
  const { phase } = useContext(PhaseButtonsContext); /* Get the phase from the context */
  const { toughStatus, confusedStatus, stunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */

  const villainId = useParams(); /* Get the villainId from the URL parameters */

  const [showVillainImage, setShowVillainImage] = useState(true); /* State to control the visibility of the villain image */

  useEffect(() => {
    /* Check if the image exists when the phase changes */
    const img = new Image();
    img.src = `/VillainImages/${villainId.villainId}/${phase}.jpg`;
    img.onload = () => setShowVillainImage(true); /* Show the image if it loads successfully */
    img.onerror = () => setShowVillainImage(false); /* Hide the image if it fails to load */
  }, [phase])

  return <div id="imagesContainer">
    {showVillainImage && (
      <img id="villainImage" src={`/VillainImages/${villainId.villainId}/${phase}.jpg`} alt={`${villainId.villainId} image`} onError={() => setShowVillainImage(false)} /* The img hides if it fails to load *//>
    )}

    {/* If  toughStatus / confusedStatus / stunnedStatus are true their respective element will show, if they are false then stay hide */}
    {toughStatus && (<img id="toughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />)}

    {confusedStatus && (<img id="confusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />)}

    {stunnedStatus && (<img id="stunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />)}

    {villainId.villainId === "juggernaut" ? <JuggernautMomentumCounters /> : null} {/* To show the counters only in the Juggernaut's page */}

    {villainId.villainId === "spiral" && phase.includes("B") ? <SpiralTeleportCounters /> : null} {/* To show the counters only in the Spiral's page and obly if she is in the Cornered Phase */}
  </div>;

}

export default CardImage;
