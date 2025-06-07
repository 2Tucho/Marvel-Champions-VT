import { Link } from "react-router-dom";

const VillainNav = ({ name, shortName, villains, isOpen, toggleSet, toggleMenu }) => {
  /* Function to take the encounters and Villains names and add spaces and capital letter */
  const transformSetName = (name) => {
    let properVillainName = name[0].toUpperCase(); /* Start with the first character */

    for (let i = 1; i < name.length; i++) {
      if (name[i] === name[i].toUpperCase()) {
        properVillainName += " "; /* Add space before uppercase letters */
      }
      properVillainName += name[i]; /* Add the current character */
    };

    return properVillainName;

  };

  return <li>

    {villains ?
      <section>
        <button className="setButton" onClick={toggleSet}>{transformSetName(name)}</button>
        {isOpen && (
          villains.map((villain, i) => {
            return <Link key={name + i} className="villainLink" to={`/villain/${villain}`} onClick={toggleMenu}><p>{transformSetName(villain)}</p></Link>
          })
        )}
      </section> : <Link className="setButton" to={`/villain/${shortName}`} onClick={toggleMenu}>{transformSetName(name)}</Link>
    }

  </li>;

};

export default VillainNav;
