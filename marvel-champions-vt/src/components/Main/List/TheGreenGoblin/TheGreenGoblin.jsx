import React from "react";
import { Link } from "react-router-dom";

function TheGreenGoblin() {

  return <article id="theGreenGoblin">

      <h4 className="villainEncounterName">The Green Goblin</h4>
      <ul className="villainList">
        <Link className="villainLink" to={`/villain/riskyBusiness`}><h5>Risky Business</h5></Link>
        <Link className="villainLink" to={`/villain/mutagenFormula`}><h5>Mutagen Formula</h5></Link>
      </ul>
    
    </article>;

}

export default TheGreenGoblin;
