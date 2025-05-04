import React from "react";
import { useState, useContext, useEffect } from "react";
import { StatusCardsContext } from "../../../../../context/StatusCardsContext";
import { TeleportCountersSpiralContext } from "../../../../../context/TeleportCountersSpiralContext";

function SpiralStatusCards () {
  const { setToughStatus, setConfusedStatus, setStunnedStatus } = useContext(StatusCardsContext);
  const { setTeleportCounters } = useContext(TeleportCountersSpiralContext);

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

  /* State to change color of the extra buttons depending if clicked or not */
  const [extraConfused, setExtraConfused] = useState(false);
  const [extraStunned, setExtraStunned] = useState(false);


  /* They are set here so the states are initialized as false and change at the moment you click the buttons. Sync the parent states with the local states */
  useEffect(() => {
    setToughStatus(tough);
    setConfusedStatus(confused);
    setStunnedStatus(stunned);
  }, [tough, confused, stunned, setToughStatus, setConfusedStatus, setStunnedStatus]);


  /* Function to change the status of the cards so it displays the Token img or not */
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
  };


  /* Function to add the logic necessary to the Stelwart button */
  const hideConfusedAndStunned = () => {
    /* Set hideStatus to true to hide the buttons */
    setHideStatus(!hideStatus); 
    
    /* Set confused and stunned to false to remove the status */
    setConfused(false);
    setStunned(false);

    /* Hide extra buttons when hiding confused and stunned */
    setShowExtraButtons(false); 
    setStelwartClicked(!stelwartClicked); /* Toggle the visibility of Stelwart button */

    /* So the extra buttons don't appear clicked again after Stelwart y+is clicked */
    setExtraConfused(false);
    setExtraStunned(false);
  };

  /* Function to add the logic necessary to the Steady button */
  const divideConfusedAndStunnedButtons = () => {
    setShowExtraButtons(!showExtraButtons); /* Toggle the visibility of extra buttons */
    setHideStatus(false); /* Ensure buttons are visible */
    setSteadyClicked(!steadyClicked); /* Toggle the visibility of Steady button */
  }

  return <>
    <article>
      <button onClick={() => hideConfusedAndStunned()} style={{backgroundColor: stelwartClicked ? "#B1B1B1" : "#F2F2F2", /*Darker grey if active, lighter grey if inactive */ }}>Stelwart</button>
      <button onClick={() => divideConfusedAndStunnedButtons()} style={{backgroundColor: steadyClicked ? "#B1B1B1" : "#F2F2F2", /*Darker grey if active, lighter grey if inactive */ }}>Steady</button>
      <button onClick={() => setTeleportCounters(0)}>Remove counters</button>
    </article>

    <article id="statusCards">
      <button id="toughStatus" onClick={() => changeStatusCard("tough")} style={{backgroundColor: tough ? "#FFB23B" : "#FFE0B2", /*Darker orange if active, lighter orange if inactive */ }}>
        Tough
      </button>

      <div className="steadyButtonsContainer">
        {showExtraButtons && (
          <button id="extraConfusedStatus" onClick={() => setExtraConfused(!extraConfused)} style={{backgroundColor: extraConfused ? "#EE7AFF" : "#F8C2F6",}}>
            Extra Confused
          </button>
        )}
        
        {!hideStatus && (
          <button id="confusedStatus" onClick={() => changeStatusCard("confused")} style=
            {{backgroundColor: confused ? "#EE7AFF" : "#F8C2F6", 
              width: showExtraButtons ? "50%" : "80vw", /* Adjust width based on showExtraButtons*/
          }}>
            Confused
          </button>
        )}
      </div>
      
      <div className="steadyButtonsContainer">
        {showExtraButtons && (
          <button id="extraStunnedStatus" onClick={() => setExtraStunned(!extraStunned)} style={{backgroundColor: extraStunned ? "#9CFF7A" : "#C6EEB8",}}>
            Extra Stunned
          </button>
        )}

        {!hideStatus && (
          <button id="stunnedStatus" onClick={() => changeStatusCard("stunned")} style=
            {{backgroundColor: stunned ? "#9CFF7A" : "#C6EEB8",
              width: showExtraButtons ? "50%" : "80vw", /* Adjust width based on showExtraButtons */
            }}>
              Stunned
          </button>
        )}
      </div>
        
    </article>
  </>;
}

export default SpiralStatusCards;
