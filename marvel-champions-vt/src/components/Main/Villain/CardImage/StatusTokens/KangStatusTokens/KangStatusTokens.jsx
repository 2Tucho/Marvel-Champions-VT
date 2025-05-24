import { useContext } from "react";
import { StatusCardsContext } from "../../../../../../context/StatusCardsContext";
import { PhaseButtonsContext } from "../../../../../../context/PhaseButtonsContext";


const KangStatusTokens = () => {
  const { toughStatus, confusedStatus, stunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */
  const { phase } = useContext(PhaseButtonsContext);

  return (phase.includes("r") ? <article className="kangTokens">
  {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
  {toughStatus && (
    <img id="kangIIToughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />
  )}
  {confusedStatus && (
    <img id="kangIIConfusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
  )}
  {stunnedStatus && (
    <img id="kangIIStunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
  )}
</article> : <article id="kangTokens">
    {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
    {toughStatus && (
      <img id="kangIAndIIIToughToken" className="statusToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token" />
    )}
    {confusedStatus && (
      <img id="kangIAndIIIConfusedToken" className="statusToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
    )}
    {stunnedStatus && (
    <img id="kangIAndIIIStunnedToken" className="statusToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
  )}
  </article>);

};

export default KangStatusTokens;
