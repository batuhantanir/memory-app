import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../redux/cardsSlice";

const GameOver = () => {
  const dispatch = useDispatch();
  const point = useSelector((state) => state.cards.point);
  return (
    <div>
      <h1 className="text-4xl">Game Over</h1>
      {point > 0 ? (
        <>
          <h3 className="text-xl mt-2">You Win</h3>
          <h3 className="text-xl mt-2">Congratulations</h3>
        </>
      ) : (
        <h3 className="text-xl mt-2">You Lose</h3>
      )}
      <h2 className="text-2xl mt-4">Your Point: {point}</h2>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"
        onClick={() => dispatch(getCards())}
      >
        Reset Game
      </button>
    </div>
  );
};

export default GameOver;
