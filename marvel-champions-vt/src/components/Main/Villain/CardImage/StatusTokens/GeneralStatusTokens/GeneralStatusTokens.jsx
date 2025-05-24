import { useContext } from "react";
import { useParams } from "react-router-dom";
import { StatusCardsContext } from "../../../../../../context/StatusCardsContext";


const GeneralStatusTokens = () => {
  const { toughStatus, confusedStatus, stunnedStatus, setToughStatus, setConfusedStatus, setStunnedStatus } = useContext(StatusCardsContext); /* Get the status Cars states from the context */
  const villainId = useParams();

  return <article id={`${villainId.villainId}Tokens`}>
    {/* If toughStatus / confusedStatus / stunnedStatus are true, their respective element will show */}
    {toughStatus && (
      <img id={`${villainId.villainId}ToughToken`} className="statusToken toughToken" src={"/StatusTokens/tough.jpg"} alt="Tough Token"/>
    )}
    {confusedStatus && (
      <img id={`${villainId.villainId}ConfusedToken`} className="statusToken confusedToken" src={"/StatusTokens/confused.jpg"} alt="Confused Token" />
    )}
    {stunnedStatus && (
      <img id={`${villainId.villainId}StunnedToken`} className="statusToken stunnedToken" src={"/StatusTokens/stunned.jpg"} alt="Stunned Token" />
    )}
  </article>;

}

export default GeneralStatusTokens;
