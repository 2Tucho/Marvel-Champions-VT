import React from "react";
import { Link } from "react-router-dom";

function MutantGenesis() {

  return <section id="mutantGenesis">

    <h4 className="villainEncounterName">Mutant Genesis</h4>
    
    <ul className="villainList campaignSet2">
      <Link className="villainLink" to={`/villain/sabretooth`}><h5>Sabretooth</h5></Link>
      <Link className="villainLink" to={`/villain/sentinel`}><h5>Project Wideawake</h5></Link>
      <Link className="villainLink" to={`/villain/masterMold`}><h5>Master Mold</h5></Link>
      <Link className="villainLink" to={`/villain/mansionAttack`}><h5>Mansion Attack</h5></Link>
      <Link className="villainLink" to={`/villain/magneto`}><h5>Magneto</h5></Link>
    </ul>
    
    </section>;

}

export default MutantGenesis;
