import React from "react";
import { useContext, useState } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function BaronZemoButtons() { 
  const {setPhase} = useContext(PhaseButtonsContext);

  /* State to change the buttons depending the selected mode */
  const [mode, setMode] = useState("normal");
  /* Function to change the mode of the buttons */
  const changeMode = (newMode) => {newMode === "normal" ? setMode("normal") : setMode("expert")}


  return <div id="baronZemoButtons">

    <article id="baronZemoModeButtons">
      <button onClick={() => changeMode("normal")}>Normal</button>
      <button onClick={() => changeMode("expert")}>Expert</button>
    </article>

    {mode === "normal" && (
      <article>
        <button onClick={() => setPhase("default")}>Masked</button>
        <button onClick={() => setPhase("A2")}>Unmasked</button>
      </article>
    )}

    {mode === "expert" && (
      <article>
        <button onClick={() => setPhase("B1")}>Masked</button>
        <button onClick={() => setPhase("B2")}>Unmasked</button>
      </article>
    )}

  </div>;

}

export default BaronZemoButtons;
