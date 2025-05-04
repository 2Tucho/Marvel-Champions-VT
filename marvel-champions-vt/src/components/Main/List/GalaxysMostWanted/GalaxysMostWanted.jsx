import React from "react";
import { Link } from "react-router-dom";

function GalaxysMostWanted() {

  return <section id="galaxysMostWanted">

    <h4 className="villainEncounterName">Galaxy's Most Wanted</h4>
    
    <ul className="villainList campaignSet">
      <Link className="villainLink" to={`/villain/drang`}><h5>Brotherhood of Badoon</h5></Link>
      <Link className="villainLink" to={`/villain/collector1`}><h5>Collector 1</h5></Link>
      <Link className="villainLink" to={`/villain/collector2`}><h5>Collector 2</h5></Link>
      <Link className="villainLink" to={`/villain/nebula`}><h5>Nebula</h5></Link>
      <Link className="villainLink" to={`/villain/ronan`}><h5>Ronan</h5></Link>
    </ul>
    
    </section>;

}

export default GalaxysMostWanted;
