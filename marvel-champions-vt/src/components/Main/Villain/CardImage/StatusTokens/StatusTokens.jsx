import React from "react";
import { useContext } from "react";
//import { useParams } from "react-router-dom";

import { StatusCardsContext } from "../../../../../context/StatusCardsContext";

function StatusTokens() {
  const { toughStatus, confusedStatus, stunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */

  //const villainId = useParams(); /* Get the villainId from the URL parameters */

  return <article id="statusTokensContainer">

      {/* If  toughStatus / confusedStatus / stunnedStatus are true their respective element will show, if they are false then stay hide */}
      {toughStatus && (<img id="toughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />)}

      {confusedStatus && (<img id="confusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />)}

      {stunnedStatus && (<img id="stunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />)}
      
    </article>;

}

export default StatusTokens;
