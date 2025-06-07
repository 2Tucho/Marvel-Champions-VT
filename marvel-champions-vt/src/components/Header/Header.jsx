import { useState, useContext, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { VillainPlayedContext } from "../../context/VillainPlayedContext";
import VillainList from "../../data/VillainList";
import VillainNav from "./VillainNav/VillainNav";


const villainListInstance = new VillainList(); /* By this treatment i can use the object with all the info and map it here */

const Header = () => {
  /* Reference to the modal container */
  const modalRef = useRef(null);

  /* Get the Villain played from the context */
  const { villainPlayed } = useContext(VillainPlayedContext);

  /* State to toggle the menu */
  const [openMenu, setOpenMenu] = useState(null);
  /* State to open and close the nav Villain sets */
  const [openSet, setOpenSet] = useState(null);

  /* Function to adapt the Villain name in params to a capitalized and full name */
  const convertParamasIntoProperVillainName = () => {
    if (!villainPlayed || villainPlayed.length === 0) {
      return "";
    } else {
      let properVillainName = villainPlayed[0].toUpperCase(); /* Start with the first character */

      for (let i = 1; i < villainPlayed.length; i++) {
        if (villainPlayed[i] === villainPlayed[i].toUpperCase()) {
          properVillainName += " "; /* Add space before uppercase letters */
        }
        properVillainName += villainPlayed[i]; /* Add the current character */
      };

      return properVillainName;
    };
  };

  const toggleMenu = () => {
    setOpenMenu(!openMenu); /* Toggle the menu state */
    /* Close all Villain set menus */
    setOpenSet(null); /* Close any open set when toggling the menu */
  };

  const toggleSet = (name) => {
    setOpenSet(openSet === name ? null : name); /* It receives a name (the name of the set you want to open or close). It checks if the currently open set (openSet) is the same as the one you just clicked (name). If it is: It sets openSet to null, closing the set (toggle off). If it isn’t: It sets openSet to name, opening that set (toggle on). */
  };

  /* Close the modal if clicking outside */
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) { /* If the modal/menu is displayed and the click is not in the modal it toggles the modal */
        setOpenMenu(null); /* Close the modal */
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (<header id="header" ref={modalRef}> {/* The ref must be here to fix the problem with the button updating the menuOpen state 2 times (the button and clicking outside the nav) */}
    <article id="menuModal">
      <button onClick={toggleMenu}>
        ☰ {/* Burger icon */}
      </button>
      <div>
        <Link to={`/`} onClick={() => {
          if (menuOpen) {
            toggleMenu(); /* Call toggleMenu only if menuOpen is true so it closes when I click here */
          }
        }}><h1>Marvel Champions</h1></Link>
        <Link className="villainLink" id="villainPlayedLink" to={`/villain/${villainPlayed}`}>Villain played: {convertParamasIntoProperVillainName()}</Link>
      </div>
    </article>

    {openMenu && (
      <nav>

        {villainListInstance.data.map(elem => (
          <VillainNav key={elem.id} {...elem} isOpen={openSet === elem.name} toggleSet={() => toggleSet(elem.name)} toggleMenu={toggleMenu}
          />
        ))}

      </nav>
    )}
  </header>
  );
}

export default Header;