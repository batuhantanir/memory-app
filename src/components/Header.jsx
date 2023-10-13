import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const point = useSelector((state) => state.cards.point);
  return (
    <header className="flex flex-col items-center">
      <h1 className="text-3xl mb-4 font-bold">Memory Game</h1>
      <h2 className="text-xl font-bold">
        POINT: <span className="font-normal">{point}</span>
      </h2>
    </header>
  );
};

export default Header;
