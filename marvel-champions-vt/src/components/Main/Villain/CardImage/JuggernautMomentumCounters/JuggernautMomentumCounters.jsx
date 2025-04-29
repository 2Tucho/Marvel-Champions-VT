import React from "react";
import { useState, useContext } from "react";
import { MomentumCountersJuggernaut } from "../../../../../context/MomentumCountersJuggernaut";

function JuggernautMomentumCounters() {
  const {momentumCounters, setMomentumCounters} = useContext(MomentumCountersJuggernaut);

  return (<button id="momentumCounter" onClick={() => setMomentumCounters((count) => count + 1)}>{momentumCounters ? momentumCounters : 0}</button>);
}

export default JuggernautMomentumCounters;
