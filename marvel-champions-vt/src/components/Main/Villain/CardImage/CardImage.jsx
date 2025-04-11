import React from "react";

function CardImage({phase}) {

  return <div>
    <img
      id="villainImage"
      src={`../../../../public/VillainImages/darkBeast/${phase}.jpg`}
    ></img>
  </div>;

}

export default CardImage;
