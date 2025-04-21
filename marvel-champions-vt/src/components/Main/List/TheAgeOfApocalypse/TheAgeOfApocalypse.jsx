import React from "react";
import { Link } from "react-router-dom";

function TheAgeOfApocalypse() {

  return <article id="theAgeOfApocalypse">

    <h4 className="villainEncounterName">The Age Of Apocalypse</h4>
    <ul className="villainList campaignSet2">
      <Link className="villainLink" to={`/villain/unus`}><h5>Unus</h5></Link>
      <Link className="villainLink" to={`/villain/fourHorsemen`}><h5>Four Horsemen</h5></Link>
      <Link className="villainLink" to={`/villain/apocalypse`}><h5>Apocalypse</h5></Link>
      <Link className="villainLink" to={`/villain/darkBeast`}><h5>Dark Beast</h5></Link>
      <Link className="villainLink" to={`/villain/enSabahNur`}><h5>Apocalypse(En Sabah Nur)</h5></Link>
    </ul>
    
    </article>;

}

export default TheAgeOfApocalypse;
