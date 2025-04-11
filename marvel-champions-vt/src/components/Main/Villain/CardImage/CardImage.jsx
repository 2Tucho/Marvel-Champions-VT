import React from "react";

function CardImage({phase}) {

  return <div>
    <img
      id="villainImage"
      src={`../../../../public/VillainImages/mysterio/${phase}.jpg`}
    ></img>
  </div>;

}

export default CardImage;
