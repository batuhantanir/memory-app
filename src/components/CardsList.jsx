import React from "react";
import Card from "./Card";
import { useSelector } from "react-redux";

const CardsList = () => {
  const cards = useSelector((state) => state.cards.cards);
  // console.log(cards);

  return (
    <div className="flex flex-wrap justify-center py-5 w-[40%]">
      {cards && cards.map((card) => <Card card={card} key={card.id} />)}
    </div>
  );
};

export default CardsList;
