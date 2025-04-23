import React from "react";
import { useState, useContext } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function KangButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  /* State to change the buttons depending the selected mode */
  const [mode, setMode] = useState("normal");
  /* Function to change the mode of the buttons */
  const changeMode = (newMode) => {newMode === "normal" ? setMode("normal") : setMode("expert")}

  /* State to change the normal Phase II image */
  const [phaseIIimg, setPhaseIIimg] = useState(false);
  /* State to change the expert Phase II image */
  const [phaseIIExpimg, setPhaseIIExpimg] = useState(false);

  return <div id="kangButtons">

    <article id="kangModeButtons">
      <button onClick={() => {
        changeMode("normal");
        setPhaseIIExpimg(false); /* Reset the Phase II image when changing modes */
      }}>Normal</button>
      <button onClick={() => {
        changeMode("expert");
        setPhaseIIimg(false); /* Reset the Phase II image when changing modes */
      }}>Expert</button>
    </article>

    {mode === "normal" && (
      <article>
        <button onClick={() => setPhase("default")}>Phase I</button>
        <button onClick={() => setPhaseIIimg(true)}>Phase II</button>
        <button onClick={() => setPhase("phaseIII")}>Phase III</button>
      </article>
    )}

    {mode === "expert" && (
      <article>
        <button onClick={() => setPhase("phaseIExp")}>Phase I</button>
        <button onClick={() => setPhaseIIExpimg(true)}>Phase II</button>
        <button onClick={() => setPhase("phaseIIIExp")}>Phase III</button>
      </article>
    )}

    {phaseIIimg && (
      <article id="phaseIIButtons">
        <button onClick={() => setPhase("phaseIIimmortus")}>Immortus</button>
        <button onClick={() => setPhase("phaseIIironlad")}>Iron Lad</button>
        <button onClick={() => setPhase("phaseIIramatut")}>Rama-Tut</button>
        <button onClick={() => setPhase("phaseIIscarletcenturion")}>Scarlet Centurion</button>
      </article>  
    )}

    {phaseIIExpimg && (
      <article id="phaseIIButtons">
        <button onClick={() => setPhase("phaseIIimmortusExp")}>Immortus</button>
        <button onClick={() => setPhase("phaseIIironladExp")}>Iron Lad</button>
        <button onClick={() => setPhase("phaseIIramatutExp")}>Rama-Tut</button>
        <button onClick={() => setPhase("phaseIIscarletcenturionExp")}>Scarlet Centurion</button>
      </article>  
    )}

  </div>;

}

export default KangButtons;
