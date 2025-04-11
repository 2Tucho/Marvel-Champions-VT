import React from "react";

function CardImage({phase}) {

  return <div>
    <img
      id="villainImage"
      src={`../../../../public/VillainImages/magneto/phase${phase}.webp`}
    ></img>
  </div>;

}

export default CardImage;
