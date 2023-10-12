import React from "react";
import Icons from "../../Icons/Icons";
import  './card.css'
function Cards({ player,gameEnd, onPlay ,idx }) {
  let icon = <Icons />;
  if (player == "X") icon = <Icons name="Cross" />;
  else if (player == "O") icon = <Icons name="Circle" />;

  return (
    <div className="Card" onClick={() => !gameEnd  && player == ""&& onPlay(idx)}>
      {icon}
    </div>
  );
}

export default Cards;
