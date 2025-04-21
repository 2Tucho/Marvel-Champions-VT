import React from "react";
import { Link } from "react-router-dom";

function TheHood() {

  return <article id="theHood">

      <Link className="villainLink villainEncounterName" to={`/villain/theHood`}><h4>The Hood</h4></Link>
    
    </article>;

}

export default TheHood;
