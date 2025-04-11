import React from "react";

function PhaseButtons({setPhase}) { 

  return <div>
    
    <div id="phaseButtonContainer">

      {/*  setPhase is wrapped in a function so that they are only executed when the buttons are clicked, not during the render phase*/}
      <button id="phaseI" onClick={() => setPhase("phaseI")}>Phase I</button> 
      <button id="phaseII" onClick={() => setPhase("phaseII")}>Phase II</button>
      <button id="phaseII" onClick={() => setPhase("phaseIII")}>Phase III</button>

    </div>

  </div>;

}

export default PhaseButtons;
