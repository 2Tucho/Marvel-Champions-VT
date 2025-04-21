import React from "react";
import { Link } from "react-router-dom";

function SinisterMotives() {

  return <article id="sinisterMotives">

    <h4 className="villainEncounterName">Sinister Motives</h4>
    <ul className="villainList campaignSet">
      <Link className="villainLink" to={`/villain/sandman`}><h5>Sandman</h5></Link>
      <Link className="villainLink" to={`/villain/venom`}><h5>Venom</h5></Link>
      <Link className="villainLink" to={`/villain/mysterio`}><h5>Mysterio</h5></Link>
      <Link className="villainLink" to={`/villain/sinisterSix`}><h5>Sinister Six</h5></Link>
      <Link className="villainLink" to={`/villain/venomGoblin`}><h5>Venom Goblin</h5></Link>
    </ul>
    
    </article>;

}

export default SinisterMotives;
