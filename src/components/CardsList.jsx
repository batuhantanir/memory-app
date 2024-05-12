import React from "react";
import Card from "./Card";
import { useDispatch, useSelector } from "react-redux";
import {
  getCards,
  isAllCheck,
  updateChecked,
  updateShow,
} from "../redux/cardsSlice";
import { useState } from "react";
import { useEffect } from "react";

const CardsList = () => {
  const cards = useSelector((state) => state.cards.cards);
  // console.log(cards);
  const [firstCard, setFirstCard] = useState(null);
  const [firstCardId, setFirstCardId] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [secondCardId, setSecondCardId] = useState(null);

  const dispatch = useDispatch();
  //useEffect
  useEffect(() => {
    isEqual();
    setTimeout(() => {
      dispatch(isAllCheck());
    }, 1000);
  }, [firstCard, secondCard]);

  //show card
  const showCard = (e) => {
    // console.log(e.target.accessKey);
    dispatch(updateShow(e.target.id));
    // console.log(firstCard," ", secondCard);

    if (firstCard === null) {
      // console.log("first card");
      setFirstCard(e.target.accessKey);
      setFirstCardId(e.target.id);
    }
    if (firstCard != null && secondCard === null) {
      // console.log("second card");
      setSecondCard(e.target.accessKey);
      setSecondCardId(e.target.id);
    }
    // console.log(firstCard, " ", secondCard);
  };

  //is equal
  const isEqual = () => {
    if (firstCard != null && secondCard != null) {
      // console.log(firstCard);
      // console.log(secondCard);
      if (firstCardId != secondCardId && firstCard == secondCard) {
        // console.log("equal");
        setFirstCard(null);
        setSecondCard(null);
        setTimeout(() => {
          dispatch(updateChecked({ equal: true, firstCardId, secondCardId }));
        }, 1000);
      } else if (firstCard != secondCard) {
        // console.log("not equal");
        setTimeout(() => {
          dispatch(updateChecked({ equal: false, firstCardId, secondCardId }));
        }, 1000);
        setFirstCard(null);
        setSecondCard(null);
      } else if (firstCardId == secondCardId && firstCard == secondCard) {
        setSecondCard(null);
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-center py-5 container max-w-[600px]">
      {cards.length != 0 &&
        cards.map((card, idx) => (
          <Card key={idx} card={card} showCard={showCard} />
        ))}
    </div>
  );
};

export default CardsList;
