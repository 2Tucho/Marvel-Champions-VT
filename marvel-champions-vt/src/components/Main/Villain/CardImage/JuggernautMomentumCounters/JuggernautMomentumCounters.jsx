import React from "react";
import { useContext } from "react";
import { MomentumCountersJuggernautContext } from "../../../../../context/MomentumCountersJuggernautContext";

function JuggernautMomentumCounters() {
  const { momentumCounters, setMomentumCounters } = useContext(MomentumCountersJuggernautContext);

  return (<button id="momentumCounter" onClick={() => setMomentumCounters((count) => count + 1)}>{momentumCounters}</button>);
}

export default JuggernautMomentumCounters;
