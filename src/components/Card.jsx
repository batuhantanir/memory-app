import React from "react";

const Card = ({ card, showCard }) => {
  if (card.checked == true) {
    return (
      <div className="flex items-center justify-center border-2 rounded w-28 h-40 m-1 transition bg-[#06b5d464] text-white">
        {card.name.toUpperCase()}
      </div>
    );
  }
  return card.show === true ? (
    <div className="flex items-center justify-center border-2 rounded w-28 h-40 m-1 transition bg-cyan-500 text-white">
      {card.name.toUpperCase()}
    </div>
  ) : (
    <div
      id={card.id}
      className="flex items-center justify-center border-2 rounded w-28 h-40 m-1 cursor-pointer transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 text-3xl text-white"
      onClick={(e) => showCard(e)}
      accessKey={card.name}
    >
      ☺
    </div>
  );
};

export default Card;
