import React from "react";
import { useState } from "react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); /* State to toggle the menu */
  
  /* States to open and close the nav Villain sets */
  const [coreSet, setCoreSet] = useState(false);
  const [greenGoblin, setGreenGoblin] = useState(false);
  const [redSkull, setRedSkull] = useState(false);
  const [galaxyWanted, setGalaxyWanted] = useState(false);
  const [madTitan, setMadTitan] = useState(false);
  const [sinisterMotives, setSinisterMotives] = useState(false);
  const [mutantGenesis, setMutantGenesis] = useState(false);
  const [mojoMania, setMojoMania] = useState(false);
  const [nextEvo, setNextEvo] = useState(false);
  const [ageApocalypse, setAgeApocalypse] = useState(false);
  const [agentsShield, setAgentsShield] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); /* Toggle the menu state */
  };

  const toggleSet = (name) => {
    if (name === "coreSet") {
      setCoreSet(!coreSet); /* Close the set menu if it's already open */
    } else if (name == "greenGoblin") {
      setGreenGoblin(!greenGoblin);
    } else if (name == "redSkull") {
      setRedSkull(!redSkull);
    } else if (name == "galaxyWanted") {
      setGalaxyWanted(!galaxyWanted);
    } else if (name == "madTitan") {
      setMadTitan(!madTitan);
    } else if (name == "sinisterMotives") {
      setSinisterMotives(!sinisterMotives);
    } else if (name == "mutantGenesis") {
      setMutantGenesis(!mutantGenesis);
    } else if (name == "mojoMania") {
      setMojoMania(!mojoMania);
    } else if (name == "nextEvo") {
      setNextEvo(!nextEvo);
    } else if (name == "ageApocalypse") {
      setAgeApocalypse(!ageApocalypse);
    } else if (name == "agentsShield") {
      setAgentsShield(!agentsShield);
    }
  }

  return (
    <header id="header">
      <div>
        <button onClick={() => toggleMenu()}>
          ☰ {/* Burger icon */}
        </button>
        <h1>Marvel Champions</h1>
      </div>
      {menuOpen && (
        <nav>
          <ul>
            <li className="setName">
              <button className="setButton" onClick={() => toggleSet("coreSet")}>Core Set</button>
              {coreSet && (
                <div>
                  <a href="">Rhyno</a>
                  <a href="">Klaw</a>
                  <a href="">Ultron</a>
                </div>
              )}
            </li>
            
            <li className="setName">
              <button className="setButton" onClick={() => toggleSet("greenGoblin")}>The Green Goblin</button>
              {greenGoblin && (
                <div>
                  <a href="#about">Risky Business</a>
                  <a href="">Mutagen Formula</a>
                </div>
              )}
            </li>
            
            <li className="setName">
              <a href="#contact" className="setButton">The Wrecking Crew</a>
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("redSkull")}>The Rise of Red Skull</button>
              {redSkull && (
                <div>
                  <a href="">Crossbones</a>
                  <a href="">Absorbing Man</a>
                  <a href="">Taskmaster</a>
                  <a href="">Zola</a>
                  <a href="">Red Skull</a>
                </div>
              )}
            </li>

            <li className="setName">
              <a href="" className="setButton">The Once and Future Kang</a>
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("galaxyWanted")}>Galaxy's Most Wanted</button>
              {galaxyWanted && (
                <div>
                  <a href="">Brotherhood of Badoon</a>
                  <a href="">Collector 1</a>
                  <a href="">Collector 2</a>
                  <a href="">Nebula</a>
                  <a href="">Ronan</a>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("madTitan")}>The Mad Titan's Shadow</button>
              {madTitan && (
                <div>
                  <a href="">Ebony Maw</a>
                  <a href="">Tower Defense</a>
                  <a href="">Thanos</a>
                  <a href="">Hela</a>
                  <a href="">Loki</a>
                </div>
              )}
            </li>

            <li className="setName">
              <a href="#contact" className="setButton">The Hood</a>
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("sinisterMotives")}>Sinister Motives</button>
              {sinisterMotives && (
                <div>
                  <a href="">Sandman</a>
                  <a href="">Venom</a>
                  <a href="">Mysterio</a>
                  <a href="">Sinister Six</a>
                  <a href="">Venom Goblin</a>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("mutantGenesis")}>Mutant Genesis</button>
              {mutantGenesis && (
                <div>
                  <a href="">Sabretooth</a>
                  <a href="">Project Wideawake</a>
                  <a href="">Master Mold</a>
                  <a href="">Mansion Attack</a>
                  <a href="">Magneto</a>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("mojoMania")}>Mojo Mania</button>
              {mojoMania && (
                <div>
                  <a href="">Magog</a>
                  <a href="">Spiral</a>
                  <a href="">Mojo</a>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("nextEvo")}>Next Evolution</button>
              {nextEvo && (
                <div>
                  <a href="">Morlock Siege</a>
                  <a href="">On the Run</a>
                  <a href="">Juggernaut</a>
                  <a href="">Mister Sinister</a>
                  <a href="">Stryfe</a>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("ageApocalypse")}>The Age of Apocalypse</button>
              {ageApocalypse && (
                <div>
                  <a href="">Unus</a>
                  <a href="">Four Horseman</a>
                  <a href="">Apocalypse</a>
                  <a href="">Dark Beast</a>
                  <a href="">Apocalypse (En Sabah Nur)</a>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("agentsShield")}>Agents of S.H.I.E.L.D.</button>
              {agentsShield && (
                <div>
                  <a href="">Black Widow</a>
                  <a href="">Batroc</a>
                  <a href="">M.O.D.O.K.</a>
                  <a href="">Thunderbolts</a>
                  <a href="">Baron Zemo</a>
                </div>
              )}
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;