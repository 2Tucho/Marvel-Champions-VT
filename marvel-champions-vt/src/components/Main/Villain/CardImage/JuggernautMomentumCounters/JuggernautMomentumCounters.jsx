import React from "react";
import { useContext } from "react";
import { MomentumCountersJuggernautContext } from "../../../../../context/MomentumCountersJuggernautContext";

function JuggernautMomentumCounters() {
  const { momentumCounters, setMomentumCounters } = useContext(MomentumCountersJuggernautContext);

  return (<button className="countersButton" onClick={() => setMomentumCounters((count) => count + 1)} style={{fontSize: momentumCounters > 9 ? "3rem" : "4rem"}}>{momentumCounters}</button>);
}

export default JuggernautMomentumCounters;
