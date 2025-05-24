import { useContext } from "react";
import { MomentumCountersJuggernautContext } from "../../../../../context/MomentumCountersJuggernautContext";


const JuggernautMomentumCounters = () => {
  const { momentumCounters, setMomentumCounters } = useContext(MomentumCountersJuggernautContext);

  return <button id="momentumCounter" className="countersButton" onClick={() => setMomentumCounters((count) => count + 1)} style={{fontSize: momentumCounters > 9 ? "3rem" : "4rem"}}>{momentumCounters}</button>;

};

export default JuggernautMomentumCounters;
