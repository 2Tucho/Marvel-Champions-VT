import { Link } from "react-router-dom";

function VillainEncounters({ name, shortName, villains, setNum }) {
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

  return <section id={name}>

    {villains ? <>
      <h4 className="villainEncounterName">{transformSetName(name)}</h4>

      <ul className={`villainList campaignSet${setNum}`}>

        {villains.map((villain, i) => {
          return <Link key={name + i} className="villainLink" to={`/villain/${villain}`}><h5>{transformSetName(villain)}</h5></Link>
        })}

      </ul>

    </> : <Link className="villainLink villainEncounterName" to={`/villain/${shortName}`}><h4>{transformSetName(name)}</h4></Link>}

  </section>;

}

export default VillainEncounters;
