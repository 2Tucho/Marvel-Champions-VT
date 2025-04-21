import React from "react";
import { Link } from "react-router-dom";

function AgentsOfShield() {

  return <article id="agentsOfShield">

    <h4 className="villainEncounterName">Agents of S.H.I.E.L.D.</h4>
    <ul className="villainList campaignSet2">
      <Link className="villainLink" to={`/villain/blackWidow`}><h5>Black Widow</h5></Link>
      <Link className="villainLink" to={`/villain/batroc`}><h5>Batroc</h5></Link>
      <Link className="villainLink" to={`/villain/modok`}><h5>M.O.D.O.K.</h5></Link>
      <Link className="villainLink" to={`/villain/thunderbolts`}><h5>Thunderbolts</h5></Link>
      <Link className="villainLink" to={`/villain/baronZemo`}><h5>Baron Zemo</h5></Link>
    </ul>
    
    </article>;

}

export default AgentsOfShield;
