import React from "react";
import { Link } from "react-router-dom";

function TheOnceAndFutureKang() {

  return <section id="theOnceAndFutureKang">

      <Link className="villainLink villainEncounterName" to={`/villain/kang`}><h4>The Once And Future Kang</h4></Link>
    
    </section>;

}

export default TheOnceAndFutureKang;
