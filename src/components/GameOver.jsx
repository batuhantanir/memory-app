import React from "react";
import { useDispatch } from "react-redux";
import { getCards } from "../redux/cardsSlice";

const GameOver = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(getCards())}>Reset Game</button>
    </div>
  );
};

export default GameOver;
