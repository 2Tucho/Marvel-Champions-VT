import React from "react";
import { Link } from "react-router-dom";

function NextEvolution() {

  return <article id="nextEvolution">

    <h4 className="villainEncounterName">Next Evolution</h4>
    <ul className="villainList campaignSet2">
      <Link className="villainLink" to={`/villain/morlockSiege`}><h5>Morlock Siege</h5></Link>
      <Link className="villainLink" to={`/villain/ontheRun`}><h5>On the Run</h5></Link>
      <Link className="villainLink" to={`/villain/juggernaut`}><h5>Juggernaut</h5></Link>
      <Link className="villainLink" to={`/villain/misterSinister`}><h5>Mister Sinister</h5></Link>
      <Link className="villainLink" to={`/villain/stryfe`}><h5>Stryfe</h5></Link>
    </ul>
    
    </article>;

}

export default NextEvolution;
