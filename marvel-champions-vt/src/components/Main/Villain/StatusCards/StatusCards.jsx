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

  return <div>
    <article>
      <button>Stelwart</button>
      <button>Steady</button>
    </article>
    <article id="statusCards">
      <button id="toughStatus" onClick={() => changeStatusCard("tough")} style={{
            backgroundColor: tough ? "#FFB23B" : "#FFE0B2", // Darker orange if active, lighter orange if inactive
          }}>Tough</button>
      <button id="confusedStatus" onClick={() => changeStatusCard("confused")} style={{
            backgroundColor: confused ? "#EE7AFF" : "#F8C2F6", // Darker orange if active, lighter orange if inactive
          }}>Confused</button>
      <button id="stunnedStatus" onClick={() => changeStatusCard("stunned")} style={{
            backgroundColor: stunned ? "#9CFF7A" : "#C6EEB8", // Darker red if active, lighter red if inactive
          }}>Stunned</button>
    </article>;
  </div>
}

export default StatusCards;
