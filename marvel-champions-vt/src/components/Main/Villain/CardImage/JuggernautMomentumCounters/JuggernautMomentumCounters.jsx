import React from "react";
import { useState, useContext } from "react";
import { MomentumCountersJuggernaut } from "../../../../../context/MomentumCountersJuggernaut";

function JuggernautMomentumCounters() {
  const {momentumCounters, setMomentumCounters} = useContext(MomentumCountersJuggernaut);

  return (<p id="momentumCounter" onClick={() => setMomentumCounters((count) => count + 1)}>{momentumCounters}</p>);
}

export default JuggernautMomentumCounters;
