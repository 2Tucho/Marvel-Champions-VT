import React from "react";
import { useParams } from "react-router-dom";
import FourHorsemenLifeCounter from "./FourHorsemenLifeCounter";
import GeneralLifeCounter from "./GeneralLifeCounter";
import KangLifeCounter from "./KangLifeCounter";
import MansionAttackVillainCounter from "./MansionAttackVillainCounter/MansionAttackVillainCounter";
import RiskyBusinessLifeCounter from "./RiskyBusinessLifeCounter";
import SinisterSixLifeCounter from "./SinisterSixLifeCounter";
import TowerDefenseLifeCounter from  "./TowerDefenseLifeCounter";
import WreckingCrewLifeCounter from "./WreckingCrewLifeCounter";

function LifeCounter() {
  const villainId = useParams(); /* Get the villainId from the URL parameters */

  /* Map the villainId to the corresponding LifeCounter component */
  const buttonComponents = {
    fourHorsemen: <FourHorsemenLifeCounter />,
    kang: <KangLifeCounter />,
    mansionAttack: <MansionAttackVillainCounter />,
    riskyBusiness: <RiskyBusinessLifeCounter />,
    sinisterSix: <SinisterSixLifeCounter />,
    towerDefense: <TowerDefenseLifeCounter />,
    theWreckingCrew: <WreckingCrewLifeCounter />,
  };

  return (<section id="lifeCounterContainer">{buttonComponents[villainId.villainId] || <GeneralLifeCounter />}</section>); {/* Render the counter component based on the villainId. If no specific are found, render the GeneralLifeCounter component. */}

}

export default LifeCounter;
