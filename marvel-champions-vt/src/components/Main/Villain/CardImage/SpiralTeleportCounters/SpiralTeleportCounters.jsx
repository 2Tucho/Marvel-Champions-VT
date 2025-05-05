import React from "react";
import { useContext } from "react";
import { TeleportCountersSpiralContext } from "../../../../../context/TeleportCountersSpiralContext";

function SpiralTeleportCounters() {
  const { teleportCounters, setTeleportCounters } = useContext(TeleportCountersSpiralContext);

  return (<button id="teleportCounter" className="countersButton" onClick={() => setTeleportCounters((count) => count + 1)} style={{fontSize: teleportCounters > 9 ? "3rem" : "4rem"}}>{teleportCounters}</button>);
  
};

export default SpiralTeleportCounters;
