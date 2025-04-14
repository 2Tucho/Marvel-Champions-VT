import React from "react";

function CardImage({phase, toughStatus, confusedStatus, stunnedStatus}) {

  return <div>
    <img id="villainImage" src={`../../../../public/VillainImages/magneto/${phase}.jpg`}></img>

    {/* If  toughStatus / confusedStatus / stunnedStatus are true their respective element will show, if they are false then stay hide */}
    {toughStatus && (<img id="toughToken" className="statusToken" src={"../../../../public/StatusTokens/tough.jpg"} alt="Tough Token" />)}

    {confusedStatus && (<img id="confusedToken" className="statusToken" src={"../../../../public/StatusTokens/confused.jpg"} alt="Confused Token" />)}

    {stunnedStatus && (<img id="stunnedToken" className="statusToken" src={"../../../../public/StatusTokens/stunned.jpg"} alt="Stunned Token" />)}
  </div>;

}

export default CardImage;
