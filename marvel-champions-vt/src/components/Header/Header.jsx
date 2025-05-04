import React from "react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false); /* State to toggle the menu */
  const modalRef = useRef(null); /* Reference to the modal container */
  
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
    /* Close all Villain set menus */
    setCoreSet(false);
    setGreenGoblin(false);
    setRedSkull(false);
    setGalaxyWanted(false);
    setMadTitan(false);
    setSinisterMotives(false);
    setMutantGenesis(false);
    setMojoMania(false);
    setNextEvo(false);
    setAgeApocalypse(false);
    setAgentsShield(false);
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

    /* Close the modal if clicking outside */
    useEffect(() => {
      const handleClickOutside = (event) => {
        if (modalRef.current && !modalRef.current.contains(event.target)) { /* If the modal/menu is displayed and the click is not in the modal it toggles the modal */
          setMenuOpen(false); /* Close the modal */
        }
      };
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);

  return (
    <header id="header">
      <div id="menuModal">
        <button onClick={() => toggleMenu()}>
          ☰ {/* Burger icon */}
        </button>
        <Link to={`/`} onClick={() => {
          if (menuOpen) {
            toggleMenu(); /* Call toggleMenu only if menuOpen is true so it closes when I click here */
          }
        }}><h1>Marvel Champions</h1></Link>
      </div>
      {menuOpen && (
        <nav ref={modalRef}>
          <ul>
            <li className="setName">
              <button className="setButton" onClick={() => toggleSet("coreSet")}>Core Set</button>
              {coreSet && (
                <div>
                  <Link className="villainLink" to={`/villain/rhyno`} onClick={toggleMenu}><p>Rhyno</p></Link>
                  <Link className="villainLink" to={`/villain/klaw`} onClick={toggleMenu}><p>Klaw</p></Link>
                  <Link className="villainLink" to={`/villain/ultron`} onClick={toggleMenu}><p>Ultron</p></Link>
                </div>
              )}
            </li>
            
            <li className="setName">
              <button className="setButton" onClick={() => toggleSet("greenGoblin")}>The Green Goblin</button>
              {greenGoblin && (
                <div>
                  <Link className="villainLink" to={`/villain/riskyBusiness`} onClick={toggleMenu}><p>Risky Business</p></Link>
                  <Link className="villainLink" to={`/villain/mutagenFormula`} onClick={toggleMenu}><p>Mutagen Formula</p></Link>
                </div>
              )}
            </li>
            
            <li className="setName">
              <Link className="setButton" to={`/villain/theWreckingCrew`} onClick={toggleMenu}>The Wrecking Crew</Link>
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("redSkull")}>The Rise of Red Skull</button>
              {redSkull && (
                <div>
                  <Link className="villainLink" to={`/villain/crossbones`} onClick={toggleMenu}><p>Crossbones</p></Link>
                  <Link className="villainLink" to={`/villain/absorbingMan`} onClick={toggleMenu}><p>Absorbing Man</p></Link>
                  <Link className="villainLink" to={`/villain/taskmaster`} onClick={toggleMenu}><p>Taskmaster</p></Link>
                  <Link className="villainLink" to={`/villain/zola`} onClick={toggleMenu}><p>Zola</p></Link>
                  <Link className="villainLink" to={`/villain/redSkull`} onClick={toggleMenu}><p>Red Skull</p></Link>
                </div>
              )}
            </li>

            <li className="setName">
              <Link className="setButton" to={`/villain/kang`} onClick={toggleMenu}>The Once And Future Kang</Link>
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("galaxyWanted")}>Galaxy's Most Wanted</button>
              {galaxyWanted && (
                <div>
                  <Link className="villainLink" to={`/villain/drang`} onClick={toggleMenu}><p>Brotherhood of Badoon</p></Link>
                  <Link className="villainLink" to={`/villain/collector1`} onClick={toggleMenu}><p>Collector 1</p></Link>
                  <Link className="villainLink" to={`/villain/collector2`} onClick={toggleMenu}><p>Collector 2</p></Link>
                  <Link className="villainLink" to={`/villain/nebula`} onClick={toggleMenu}><p>Nebula</p></Link>
                  <Link className="villainLink" to={`/villain/ronan`} onClick={toggleMenu}><p>Ronan</p></Link>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("madTitan")}>The Mad Titan's Shadow</button>
              {madTitan && (
                <div>
                  <Link className="villainLink" to={`/villain/ebonyMaw`} onClick={toggleMenu}><p>Ebony Maw</p></Link>
                  <Link className="villainLink" to={`/villain/towerDefense`} onClick={toggleMenu}><p>Tower Defense</p></Link>
                  <Link className="villainLink" to={`/villain/thanos`} onClick={toggleMenu}><p>Thanos</p></Link>
                  <Link className="villainLink" to={`/villain/hela`} onClick={toggleMenu}><p>Hela</p></Link>
                  <Link className="villainLink" to={`/villain/loki`} onClick={toggleMenu}><p>Loki</p></Link>
                </div>
              )}
            </li>

            <li className="setName">
              <Link className="setButton" to={`/villain/theHood`} onClick={toggleMenu}>The Hood</Link>
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("sinisterMotives")}>Sinister Motives</button>
              {sinisterMotives && (
                <div>
                  <Link className="villainLink" to={`/villain/sandman`} onClick={toggleMenu}><p>Sandman</p></Link>
                  <Link className="villainLink" to={`/villain/venom`} onClick={toggleMenu}><p>Venom</p></Link>
                  <Link className="villainLink" to={`/villain/mysterio`} onClick={toggleMenu}><p>Mysterio</p></Link>
                  <Link className="villainLink" to={`/villain/sinisterSix`} onClick={toggleMenu}><p>Sinister Six</p></Link>
                  <Link className="villainLink" to={`/villain/venomGoblin`} onClick={toggleMenu}><p>Venom Goblin</p></Link>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("mutantGenesis")}>Mutant Genesis</button>
              {mutantGenesis && (
                <div>
                  <Link className="villainLink" to={`/villain/sabretooth`} onClick={toggleMenu}><p>Sabretooth</p></Link>
                  <Link className="villainLink" to={`/villain/sentinel`} onClick={toggleMenu}><p>Project Wideawake</p></Link>
                  <Link className="villainLink" to={`/villain/masterMold`} onClick={toggleMenu}><p>Master Mold</p></Link>
                  <Link className="villainLink" to={`/villain/mansionAttack`} onClick={toggleMenu}><p>Mansion Attack</p></Link>
                  <Link className="villainLink" to={`/villain/magneto`} onClick={toggleMenu}><p>Magneto</p></Link>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("mojoMania")}>Mojo Mania</button>
              {mojoMania && (
                <div>
                  <Link className="villainLink" to={`/villain/magog`} onClick={toggleMenu}><p>Magog</p></Link>
                  <Link className="villainLink" to={`/villain/spiral`} onClick={toggleMenu}><p>Spiral</p></Link>
                  <Link className="villainLink" to={`/villain/mojo`} onClick={toggleMenu}><p>Mojo</p></Link>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("nextEvo")}>Next Evolution</button>
              {nextEvo && (
                <div>
                  <Link className="villainLink" to={`/villain/morlockSiege`} onClick={toggleMenu}><p>Morlock Siege</p></Link>
                  <Link className="villainLink" to={`/villain/ontheRun`} onClick={toggleMenu}><p>On the Run</p></Link>
                  <Link className="villainLink" to={`/villain/juggernaut`} onClick={toggleMenu}><p>Juggernaut</p></Link>
                  <Link className="villainLink" to={`/villain/misterSinister`} onClick={toggleMenu}><p>Mister Sinister</p></Link>
                  <Link className="villainLink" to={`/villain/stryfe`} onClick={toggleMenu}><p>Stryfe</p></Link>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("ageApocalypse")}>The Age of Apocalypse</button>
              {ageApocalypse && (
                <div>
                  <Link className="villainLink" to={`/villain/unus`} onClick={toggleMenu}><p>Unus</p></Link>
                  <Link className="villainLink" to={`/villain/fourHorsemen`} onClick={toggleMenu}><p>Four Horsemen</p></Link>
                  <Link className="villainLink" to={`/villain/apocalypse`} onClick={toggleMenu}><p>Apocalypse</p></Link>
                  <Link className="villainLink" to={`/villain/darkBeast`} onClick={toggleMenu}><p>Dark Beast</p></Link>
                  <Link className="villainLink" to={`/villain/enSabahNur`} onClick={toggleMenu}><p>Apocalypse (En Sabah Nur)</p></Link>
                </div>
              )}
            </li>

            <li>
              <button className="setButton" onClick={() => toggleSet("agentsShield")}>Agents of S.H.I.E.L.D.</button>
              {agentsShield && (
                <div>
                  <Link className="villainLink" to={`/villain/blackWidow`} onClick={toggleMenu}><p>Black Widow</p></Link>
                  <Link className="villainLink" to={`/villain/batroc`} onClick={toggleMenu}><p>Batroc</p></Link>
                  <Link className="villainLink" to={`/villain/modok`} onClick={toggleMenu}><p>M.O.D.O.K.</p></Link>
                  <Link className="villainLink" to={`/villain/thunderbolts`} onClick={toggleMenu}><p>Thunderbolts</p></Link>
                  <Link className="villainLink" to={`/villain/baronZemo`} onClick={toggleMenu}><p>Baron Zemo</p></Link>
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