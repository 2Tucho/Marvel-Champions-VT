import React from "react";
import { useState, useContext, useEffect } from "react";
import { PhaseButtonsContext } from "../../../../../context/PhaseButtonsContext";

function LokiButtons() { 
  /* State to keep track of the different Loki form */
  const [remainingLokis, setRemainingLokis] = useState([
    "loki1",
    "loki2",
    "loki3",
    "loki4",
    "loki5",
  ]); 
 
  const [version1Clicked, setVersion1Clicked] = useState(false);  /* State to keep track of Version 1 button */
  const [version2Clicked, setVersion2Clicked] = useState(false);
  const [version3Clicked, setVersion3Clicked] = useState(false);
  const [version4Clicked, setVersion4Clicked] = useState(false);
  const [version5Clicked, setVersion5Clicked] = useState(false); 
  /* To save the version we want to change */
  const [actualVersion, setActualVersion] = useState()

  const {setPhase} = useContext(PhaseButtonsContext);

  /* Function to show a random version of Loki */
  const chooseRandomVillain = () => {
    if (remainingLokis.length === 0) {
      return; /* Exit if there aren't forms left */
    }

    const randomIndex = Math.floor(Math.random() * remainingLokis.length); /* Get a random index from the Loki's array */
    const randomLoki = remainingLokis[randomIndex];

    setPhase(randomLoki); /* Set the phase to the selected Loki form */
  }

  useEffect(() => {
    const putAsideVersion = () => {
      const lokiVersion = `loki${actualVersion}`;
  
      if(actualVersion == 1) {
        if(version1Clicked) {
          /* Remove "loki1" from the array */
          setRemainingLokis(remainingLokis.filter(villain => villain !== lokiVersion))
        } else if (!version1Clicked) {
          /* Add "loki1" from the array */
          setRemainingLokis([...remainingLokis, lokiVersion])
        }
      } else if(actualVersion == 2) {
        if(version2Clicked) {
          setRemainingLokis(remainingLokis.filter(villain => villain !== lokiVersion))
        } else if (!version2Clicked) {
          setRemainingLokis([...remainingLokis, lokiVersion])
        }
      } else if(actualVersion == 3) {
        if(version3Clicked) {
          setRemainingLokis(remainingLokis.filter(villain => villain !== lokiVersion))
        } else if (!version3Clicked) {
          setRemainingLokis([...remainingLokis, lokiVersion])
        }
      } else if(actualVersion == 4) {
        if(version4Clicked) {
          setRemainingLokis(remainingLokis.filter(villain => villain !== lokiVersion))
        } else if (!version4Clicked) {
          setRemainingLokis([...remainingLokis, lokiVersion])
        }
      } else if(actualVersion == 5) {
        if(version5Clicked) {
          setRemainingLokis(remainingLokis.filter(villain => villain !== lokiVersion))
        } else if (!version5Clicked) {
          setRemainingLokis([...remainingLokis, lokiVersion])
        }
      }
    }

    putAsideVersion()
  }, [version1Clicked, version2Clicked, version3Clicked, version4Clicked, version5Clicked]); /* So it changes every time that states also change */


  

  return <div id="lokiButtons">

      <article id="lokiLegend">

        <h3>Loki versions in the victory display</h3>

        <article>
          <div>
            <p>Version 1 - LOKI (1/21)</p>
            <button onClick={() => {
              setVersion1Clicked(!version1Clicked); /* Toggle the state */
              setActualVersion(1); /* Add or remove "loki1" from remainingLokis */
            }} style={{backgroundColor: version1Clicked ? "green" : "red" }}>o</button>
          </div>

          <div>
            <p>Version 2 - LOKI (2/21)</p>
            <button onClick={() => {
              setVersion2Clicked(!version2Clicked);
              setActualVersion(2);
            }} style={{backgroundColor: version2Clicked ? "green" : "red" }}>o</button>
          </div>

          <div>
            <p>Version 3 - LOKI (3/21)</p>
            <button onClick={() => {
              setVersion3Clicked(!version3Clicked);
              setActualVersion(3);
            }} style={{backgroundColor: version3Clicked ? "green" : "red" }}>o</button>
          </div>

          <div>
            <p>Version 4 - LOKI (4/21)</p>
            <button onClick={() => {
              setVersion4Clicked(!version4Clicked);
              setActualVersion(4);
            }} style={{backgroundColor: version4Clicked ? "green" : "red" }}>o</button>
          </div>

          <div>
            <p>Version 5 - LOKI (5/21)</p>
            <button onClick={() => {
              setVersion5Clicked(!version5Clicked);
              setActualVersion(5);
            }} style={{backgroundColor: version5Clicked ? "green" : "red" }}>o</button>
          </div>
        </article>

      </article>

      <button onClick={chooseRandomVillain}>Random Loki</button>

    </div>

}

export default LokiButtons;
