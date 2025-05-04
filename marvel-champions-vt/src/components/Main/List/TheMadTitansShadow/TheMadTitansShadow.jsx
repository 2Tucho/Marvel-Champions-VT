import React from "react";
import { Link } from "react-router-dom";

function TheMadTitansShadow() {

  return <section id="theMadTitansShadow">

    <h4 className="villainEncounterName">The Mad Titan's Shadow</h4>
    
    <ul className="villainList campaignSet">
      <Link className="villainLink" to={`/villain/ebonyMaw`}><h5>Ebony Maw</h5></Link>
      <Link className="villainLink" to={`/villain/towerDefense`}><h5>Tower Defense</h5></Link>
      <Link className="villainLink" to={`/villain/thanos`}><h5>Thanos</h5></Link>
      <Link className="villainLink" to={`/villain/hela`}><h5>Hela</h5></Link>
      <Link className="villainLink" to={`/villain/loki`}><h5>Loki</h5></Link>
    </ul>
    
    </section>;

}

export default TheMadTitansShadow;
