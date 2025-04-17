import React from "react";
import { Link } from "react-router-dom";

function CoreSet() {

  return <article id="coreSet">

      <h4 className="villainEncounterName">Core Set</h4>
      <ul className="villainList">
        <Link className="villainLink" to={`/villain/Rhyno`}><h5>Rhyno</h5></Link>
        <Link className="villainLink" to={`/villain/Klaw`}><h5>Klaw</h5></Link>
        <Link className="villainLink" to={`/villain/Ultron`}><h5>Ultron</h5></Link>
      </ul>
    
    </article>;

}

export default CoreSet;
