import React from "react";
import { useParams } from "react-router-dom";
import GeneralStatusTokens from "./GeneralStatusTokens/GeneralStatusTokens";
import RiskyBusinessStatusTokens from "./RiskyBusinessStatusTokens/RiskyBusinessStatusTokens";
import WreckingCrewStatusTokens from "./WreckingCrewStatusTokens/WreckingCrewStatusTokens";
import KangStatusTokens from "./KangStatusTokens/KangStatusTokens";
import TowerDefenseStatusTokens from "./TowerDefenseStatusTokens/TowerDefenseStatusTokens";


function StatusTokens() { 
  const villainId = useParams(); /* Get the villainId from the URL parameters */

  /* Map the villainId to the corresponding button component */
  const statusComponents = {
    kang: <KangStatusTokens />,
    riskyBusiness: <RiskyBusinessStatusTokens />,
    towerDefense: <TowerDefenseStatusTokens />,
    theWreckingCrew: <WreckingCrewStatusTokens />,
  };

  return <section id="statusTokensContainer">{statusComponents[villainId.villainId] || <GeneralStatusTokens />}</section>; {/* Render the buttons based on the villainId. If no specific buttons are found, render the GeneralButtons component. */}

};

export default StatusTokens;
