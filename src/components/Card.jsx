import React from "react";

const Card = ({ card,showCard }) => {
  

  return (

    <div
      id={card.id}
      className="flex items-center justify-center border-2 rounded w-28 h-40 m-1 cursor-pointer "
      onClick={(e) => showCard(e)}
      accessKey={card.name}
    >
      {card.show === true || card.checked === true ? (
        <>{card.name.toUpperCase()}</>
      ) : (
        <> {"Memory Card"}</>
      )}
    </div>
  );
};

export default Card;
