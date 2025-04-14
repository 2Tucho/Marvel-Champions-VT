import React from "react";
import {useState} from "react";

function StatusCards () {
  // States to keep track of the active Status Cards on the Villain
  const [tough, setTough] = useState(false); 
  const [confused, setConfused] = useState(false); 
  const [stunned, setStunned] = useState(false);

  function changeStatusCard (status) {
    switch (status) {
      case "tough":
        setTough(!tough);
        break;
      case "confused":
        setConfused(!confused);
        break;
      case "stunned":
        setStunned(!stunned);
        break;
      default:
        break;
    }
  }

  return <article id="statusCards">
    <button id="phaseI" onClick={() => changeStatusCard("tough")}>Tough</button> 
    <button id="phaseII" onClick={() => changeStatusCard("confused")}>Confused</button>
    <button id="phaseII" onClick={() => changeStatusCard("stunned")}>Stunned</button>
  </article>;

}

export default StatusCards;
