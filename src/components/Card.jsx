import React from "react";
const Card = ({ card }) => {
  console.log(card.checked);
  return card.checked == false ? (
    <div
      id={card.id}
      className="flex items-center justify-center border-2 rounded w-28 h-40 m-1 "
    >
      {card.name.toUpperCase()}
    </div>
  ) : (
    <div>Ananin ami</div>
  );
};

export default Card;
