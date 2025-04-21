import React from "react";
import { Link } from "react-router-dom";

function CoreSet() {

  return <article id="coreSet">

      <h4 className="villainEncounterName">Core Set</h4>
      <ul className="villainList">
        <Link className="villainLink" to={`/villain/rhyno`}><h5>Rhyno</h5></Link>
        <Link className="villainLink" to={`/villain/klaw`}><h5>Klaw</h5></Link>
        <Link className="villainLink" to={`/villain/ultron`}><h5>Ultron</h5></Link>
      </ul>
    
    </article>;

}

export default CoreSet;
