import React from "react";
import { useParams } from "react-router-dom";

function CardImage({phase, toughStatus, confusedStatus, stunnedStatus}) {

  const villainId = useParams(); /* Get the villainId from the URL parameters */

  return <div id="imagesContainer">
    <img id="villainImage" src={`/VillainImages/${villainId.villainId}/${phase}.jpg`} alt={`${villainId.villainId} image`}></img>

    {/* If  toughStatus / confusedStatus / stunnedStatus are true their respective element will show, if they are false then stay hide */}
    {toughStatus && (<img id="toughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />)}

    {confusedStatus && (<img id="confusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />)}

    {stunnedStatus && (<img id="stunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />)}
  </div>;

}

export default CardImage;
