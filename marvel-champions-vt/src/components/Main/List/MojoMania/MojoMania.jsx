import React from "react";
import { Link } from "react-router-dom";

function MojoMania() {

  return <section id="mojoMania">

    <h4 className="villainEncounterName">Mojo Mania</h4>
    
    <ul className="villainList">
      <Link className="villainLink" to={`/villain/magog`}><h5>Magog</h5></Link>
      <Link className="villainLink" to={`/villain/spiral`}><h5>Spiral</h5></Link>
      <Link className="villainLink" to={`/villain/mojo`}><h5>Mojo</h5></Link>
    </ul>
    
    </section>;

}

export default MojoMania;
