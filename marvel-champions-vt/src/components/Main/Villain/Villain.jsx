import { useState, useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { MomentumCountersJuggernautContext } from "../../../context/MomentumCountersJuggernautContext";
import { PhaseButtonsContext } from "../../../context/PhaseButtonsContext";
import { StatusCardsContext } from "../../../context/StatusCardsContext";
import { TeleportCountersSpiralContext } from "../../../context/TeleportCountersSpiralContext";
import { VillainPlayedContext } from "../../../context/VillainPlayedContext";
import CardImage from "./CardImage";
import LifeCounter from "./LifeCounter";
import PhaseButtons from "./PhaseButtons";
import StatusCards from "./StatusCards";


const Villain = () => {
  /* State to keep track of the phase of the villain */
  const [phase, setPhase] = useState("default");
  
  /* States to keep track of the active Status Cards on the Villain */
  const [toughStatus, setToughStatus] = useState();
  const [confusedStatus, setConfusedStatus] = useState();
  const [stunnedStatus, setStunnedStatus] = useState();
  
  /* State to keep track of the number of momentum counters on Juggernaut */
  const [momentumCounters, setMomentumCounters] = useState(0);

  /* State to keep track of the number of teleport counters on Cornered Spiral */
  const [teleportCounters, setTeleportCounters] = useState(0);

  const { setVillainPlayed } = useContext(VillainPlayedContext); /* From the context, to set the Villain played */

  const urlParams = useParams();

  useEffect(() => {
    setVillainPlayed(urlParams.villainId)
  }, [urlParams.villainId])

  return <>

    <TeleportCountersSpiralContext.Provider value={{teleportCounters, setTeleportCounters}}>
      <MomentumCountersJuggernautContext.Provider value={{momentumCounters, setMomentumCounters}}>
        <StatusCardsContext.Provider value={{toughStatus, setToughStatus, confusedStatus, setConfusedStatus, stunnedStatus, setStunnedStatus}}>
          <PhaseButtonsContext.Provider value={{phase, setPhase}}>
            <PhaseButtons />
            <LifeCounter />

            {/* Image of the villain, depending on the phase */}
            <CardImage
              phase={phase}
              setPhase={setPhase}
              toughStatus={toughStatus}
              confusedStatus={confusedStatus}
              stunnedStatus={stunnedStatus}
              momentumCounters={momentumCounters}
              setToughStatus={setToughStatus}
              setConfusedStatus={setConfusedStatus}
              setStunnedStatus={setStunnedStatus}
              setMomentumCounters={setMomentumCounters}
              teleportCounters={teleportCounters}
              setTeleportCounters={setTeleportCounters}
            />
          </PhaseButtonsContext.Provider>

          <StatusCards
            setToughStatus={setToughStatus}
            setConfusedStatus={setConfusedStatus}
            setStunnedStatus={setStunnedStatus}
            setMomentumCounters={setMomentumCounters}
            setTeleportCounters={setTeleportCounters}
          />
        </StatusCardsContext.Provider>
      </MomentumCountersJuggernautContext.Provider>
    </TeleportCountersSpiralContext.Provider>

  </>;

};

export default Villain;
