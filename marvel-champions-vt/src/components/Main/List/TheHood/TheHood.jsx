import React from "react";
import { Link } from "react-router-dom";

function TheHood() {

  return <section id="theHood">

      <Link className="villainLink villainEncounterName" to={`/villain/theHood`}><h4>The Hood</h4></Link>
    
    </section>;

}

export default TheHood;
