import React from "react";

import { useSelector } from "react-redux";
import { cardsSelector } from "../redux/cardsSlice";

import Card from "./Card";

const CardsList = () => {
  const cardsSelect = useSelector(cardsSelector.selectEntities);
  const cardsTotal = useSelector(cardsSelector.selectTotal);
  console.log(cardsSelect);

  return (
    <div className="grid">
      {/* {cards && cards.map((card)=>(
      <Card card={card} />
    ))} */}
    </div>
  );
};

export default CardsList;
