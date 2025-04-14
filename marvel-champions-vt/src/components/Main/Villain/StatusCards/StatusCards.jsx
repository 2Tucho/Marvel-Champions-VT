import React from "react";
import {useState} from "react";

function StatusCards ({setToughStatus, setConfusedStatus, setStunnedStatus}) {
  // States to keep track of the active Status Cards on the Villain
  const [tough, setTough] = useState(false); 
  const [confused, setConfused] = useState(false); 
  const [stunned, setStunned] = useState(false);

  const changeStatusCard = (status) =>{
    switch (status) {
      case "tough":
        setTough(!tough); /* Changes state to the contrary of the previous one */
        
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

  /* They are set here so the states are initialized as false and change at the moment you click the buttons */
  setToughStatus(tough);
  setConfusedStatus(confused);
  setStunnedStatus(stunned);

  return <article id="statusCards">
    <button id="toughStatus" onClick={() => changeStatusCard("tough")}>Tough</button> 
    <button id="confusedStatus" onClick={() => changeStatusCard("confused")}>Confused</button>
    <button id="stunnedStatus" onClick={() => changeStatusCard("stunned")}>Stunned</button>
  </article>;

}

export default StatusCards;
