import React from "react";
import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";

import { PhaseButtonsContext } from "../../../../context/PhaseButtonsContext";
import JuggernautMomentumCounters from "./JuggernautMomentumCounters/JuggernautMomentumCounters";
import SpiralTeleportCounters from "./SpiralTeleportCounters/SpiralTeleportCounters";
import StatusTokens from "./StatusTokens/StatusTokens"; 

function CardImage() {
  const { phase, setPhase } = useContext(PhaseButtonsContext); /* Get the phase from the context */

  const villainId = useParams(); /* Get the villainId from the URL parameters */

  const [showVillainImage, setShowVillainImage] = useState(true); /* State to control the visibility of the villain image */

  /* Reset the phase state when the villainId changes */
  useEffect(() => {
    setPhase("default"); /* Reset phase to default */
  }, [villainId.villainId, setPhase]);

  useEffect(() => {
    /* Check if the image exists when the phase changes */
    const img = new Image();
    img.src = `/VillainImages/${villainId.villainId}/${phase}.jpg`;
    img.onload = () => setShowVillainImage(true); /* Show the image if it loads successfully */
    img.onerror = () => setShowVillainImage(false); /* Hide the image if it fails to load */
  }, [phase, villainId.villainId]);

  return <section id="imagesContainer">

    {showVillainImage && (
      <img id="villainImage" src={`/VillainImages/${villainId.villainId}/${phase}.jpg`} alt={`${villainId.villainId} image`} onError={() => setShowVillainImage(false)} /* The img hides if it fails to load *//>
    )}

    <StatusTokens />

    {villainId.villainId === "juggernaut" ? <JuggernautMomentumCounters /> : null} {/* To show the counters only in the Juggernaut's page */}

    {villainId.villainId === "spiral" && phase.includes("B") ? <SpiralTeleportCounters /> : null} {/* To show the counters only in the Spiral's page and obly if she is in the Cornered Phase */}
  
  </section>;

}

export default CardImage;
