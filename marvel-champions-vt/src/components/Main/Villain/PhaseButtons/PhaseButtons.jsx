import { useParams } from "react-router-dom";
import ApocalypseButtons from "./ApocalypseButtons/ApocalypseButtons";
import BaronZemoButtons from "./BaronZemoButtons/BaronZemoButtons";
import BatrocButtons from "./BatrocButtons/BatrocButtons";
import Collector2Buttons from "./Collector2Buttons/Collector2Buttons";
import EnSabahNurButtons from "./EnSabahNurButtons/EnSabahNurButtons";
import FourHorsemenButtons from "./FourHorsemenButtons/FourHorsemenButtons";
import GeneralButtons from "./GeneralButtons/GeneralButtons";
import HelaButtons from "./HelaButtons/HelaButtons";
import KangButtons from "./KangButtons/KangButtons";
import LokiButtons from "./LokiButtons/LokiButtons";
import MagogButtons from "./MagogButtons/MagogButtons";
import MansionAttackButtons from "./MansionAttackButtons/MansionAttackButtons";
import ModokButtons from "./ModokButtons/ModokButtons";
import MorlockSiegeButtons from "./MorlockSiegeButtons/MorlockSiegeButtons";
import OnTheRunButtons from "./OnTheRunButtons/OnTheRunButtons";
import RiskyBusinessButtons from "./RiskyBusinessButtons/RiskyBusinessButtons";
import SinisterSixButtons from "./SinisterSixButtons/SinisterSixButtons";
import SpiralButtons from "./SpiralButtons/SpiralButtons";
import ThunderboltsButtons from "./ThunderboltsButtons/ThunderboltsButtons";
import TowerDefenseButtons from "./TowerDefenseButtons/TowerDefenseButtons";
import WreckingCrewButtons from "./WreckingCrewButtons/WreckingCrewButtons";


const PhaseButtons = () => { 
  const villainId = useParams(); /* Get the villainId from the URL parameters */

  /* Map the villainId to the corresponding button component */
  const buttonComponents = {
    apocalypse: <ApocalypseButtons />,
    baronZemo: <BaronZemoButtons />,
    batroc: <BatrocButtons />,
    collector2: <Collector2Buttons />,
    enSabahNur: <EnSabahNurButtons />,
    fourHorsemen: <FourHorsemenButtons />,
    hela: <HelaButtons />,
    kang: <KangButtons />,
    loki: <LokiButtons />,
    magog: <MagogButtons />,
    mansionAttack: <MansionAttackButtons />,
    modok: <ModokButtons />,
    morlockSiege: <MorlockSiegeButtons />,
    ontheRun: <OnTheRunButtons />,
    riskyBusiness: <RiskyBusinessButtons />,
    sinisterSix: <SinisterSixButtons />,
    spiral: <SpiralButtons />,
    thunderbolts: <ThunderboltsButtons />,
    towerDefense: <TowerDefenseButtons />,
    theWreckingCrew: <WreckingCrewButtons />,
  };

  return <section id="phaseButtonsContainer">{buttonComponents[villainId.villainId] || <GeneralButtons />}</section>; {/* Render the buttons based on the villainId. If no specific buttons are found, render the GeneralButtons component. */}

};

export default PhaseButtons;
