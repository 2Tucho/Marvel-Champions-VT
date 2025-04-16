import React from "react";
import {useState} from "react";

function StatusCards ({setToughStatus, setConfusedStatus, setStunnedStatus}) {
  /* States to keep track of the active Status Cards on the Villain */
  const [tough, setTough] = useState(false); 
  const [confused, setConfused] = useState(false); 
  const [stunned, setStunned] = useState(false);

  /* State to hide buttons */
  const [hideStatus, setHideStatus] = useState(false); 

  /* State to show extra buttons */
  const [showExtraButtons, setShowExtraButtons] = useState(false); 

  /* States to display if the buttons are clicked or not */
  const [stelwartClicked, setStelwartClicked] = useState(false); 
  const [steadyClicked, setSteadyClicked] = useState(false);

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

  const hideConfusedAndStunned = () => {
    setHideStatus(!hideStatus); /* Set hideStatus to true to hide the buttons */
    /* Set confused and stunned to false to remove the status */
    setConfused(false);
    setStunned(false);
    setShowExtraButtons(false); /* Hide extra buttons when hiding confused and stunned */
    setStelwartClicked(!stelwartClicked); /* Toggle the visibility of Stelwart button */
  };

  const divideConfusedAndStunnedButtons = () => {
    setShowExtraButtons(!showExtraButtons); /* Toggle the visibility of extra buttons */
    setHideStatus(false); /* Ensure buttons are visible */
    setSteadyClicked(!steadyClicked); /* Toggle the visibility of Steady button */
  }

  return <div>
    <article>
      <button onClick={() => hideConfusedAndStunned()} style={{backgroundColor: stelwartClicked ? "#B1B1B1" : "#F2F2F2", /*Darker grey if active, lighter grey if inactive */ }}>Stelwart</button>
      <button onClick={() => divideConfusedAndStunnedButtons()} style={{backgroundColor: steadyClicked ? "#B1B1B1" : "#F2F2F2", /*Darker grey if active, lighter grey if inactive */ }}>Steady</button>
    </article>

    <article id="statusCards">
      <button id="toughStatus" onClick={() => changeStatusCard("tough")} style={{backgroundColor: tough ? "#FFB23B" : "#FFE0B2", /*Darker orange if active, lighter orange if inactive */ }}>
        Tough
      </button>

      <div>
        {!hideStatus && (
          <button id="confusedStatus" onClick={() => changeStatusCard("confused")} style=
            {{backgroundColor: confused ? "#EE7AFF" : "#F8C2F6", 
              width: showExtraButtons ? "50%" : "80vw", /* Adjust width based on showExtraButtons*/
          }}>
            Confused
          </button>
        )}
        {showExtraButtons && (
          <button id="extraConfusedStatus" onClick={() => changeStatusCard("confused")} style={{backgroundColor: confused ? "#DDA0DD" : "#E6B3E6",}}>
            Extra Confused
          </button>
        )}
      </div>
      
      <div>
        {!hideStatus && (
          <button id="stunnedStatus" onClick={() => changeStatusCard("stunned")} style=
            {{backgroundColor: stunned ? "#9CFF7A" : "#C6EEB8",
              width: showExtraButtons ? "50%" : "80vw", /* Adjust width based on showExtraButtons */
            }}>
              Stunned
          </button>
        )}

        {showExtraButtons && (
          <button id="extraStunnedStatus" onClick={() => changeStatusCard("stunned")} style={{backgroundColor: stunned ? "#7FFF00" : "#B3FFB3",}}>
            Extra Stunned
          </button>
        )}
      </div>
        
    </article>;
  </div>
}

export default StatusCards;
