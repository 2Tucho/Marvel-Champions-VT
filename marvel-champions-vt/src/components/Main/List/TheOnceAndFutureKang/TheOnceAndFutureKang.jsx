import React from "react";
import { Link } from "react-router-dom";

function TheOnceAndFutureKang() {

  return <article id="theOnceAndFutureKang">

      <Link className="villainLink villainEncounterName" to={`/villain/kang`}><h4>The Once And Future Kang</h4></Link>
    
    </article>;

}

export default TheOnceAndFutureKang;
