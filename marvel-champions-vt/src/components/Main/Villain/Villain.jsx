import React from "react";
import { useState } from "react";
import { PhaseButtonsContext } from "../../../context/PhaseButtonsContext";
import { MomentumCountersJuggernautContext } from "../../../context/MomentumCountersJuggernautContext";
import { StatusCardsContext } from "../../../context/StatusCardsContext";
import PhaseButtons from "./PhaseButtons";
import LifeCounter from "./LifeCounter";
import CardImage from "./CardImage";
import StatusCards from "./StatusCards";

function Villain () {
  /* State to keep track of the phase of the villain */
  const [phase, setPhase] = useState("default");
  
  /* States to keep track of the active Status Cards on the Villain */
  const [toughStatus, setToughStatus] = useState();
  const [confusedStatus, setConfusedStatus] = useState();
  const [stunnedStatus, setStunnedStatus] = useState();
  
  /* State to keep track of the number of momentum counters of Juggernaut */
  const [momentumCounters, setMomentumCounters] = useState(0);

  return <div>
    <MomentumCountersJuggernautContext.Provider value={{momentumCounters, setMomentumCounters}}>
      <StatusCardsContext.Provider value={{toughStatus, setToughStatus, confusedStatus, setConfusedStatus, stunnedStatus, setStunnedStatus}}>
        <PhaseButtonsContext.Provider value={{phase, setPhase}}>
          <PhaseButtons />
          <LifeCounter />

          {/* Image of the villain, depending on the phase */}
          <CardImage
            phase={phase}
            toughStatus={toughStatus}
            confusedStatus={confusedStatus}
            stunnedStatus={stunnedStatus}
            momentumCounters={momentumCounters}
            setMomentumCounters={setMomentumCounters}
          />
        </PhaseButtonsContext.Provider>

        <StatusCards
          setToughStatus={setToughStatus}
          setConfusedStatus={setConfusedStatus}
          setStunnedStatus={setStunnedStatus}
          setMomentumCounters={setMomentumCounters}
        />
      </StatusCardsContext.Provider>
    </MomentumCountersJuggernautContext.Provider>
  </div>;

}

export default Villain;
