import React from "react";
import { Link } from "react-router-dom";

function TheRiseOfRedSkull() {

  return <section id="theRiseOfRedSkull">

    <h4 className="villainEncounterName">The Rise Of Red Skull</h4>
    
    <ul className="villainList campaignSet">
      <Link className="villainLink" to={`/villain/crossbones`}><h5>Crossbones</h5></Link>
      <Link className="villainLink" to={`/villain/absorbingMan`}><h5>Absorbing Man</h5></Link>
      <Link className="villainLink" to={`/villain/taskmaster`}><h5>Taskmaster</h5></Link>
      <Link className="villainLink" to={`/villain/zola`}><h5>Zola</h5></Link>
      <Link className="villainLink" to={`/villain/redSkull`}><h5>Red Skull</h5></Link>
    </ul>
    
    </section>;

}

export default TheRiseOfRedSkull;
