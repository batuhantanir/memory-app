import React from "react";
import CardsList from "./components/CardsList";
import Header from "./components/Header";
import { useSelector } from "react-redux";
import GameOver from "./components/GameOver";

function App() {
  const isAllChecked = useSelector((state) => state.cards.isAllChecked);

  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      {isAllChecked == true ? <GameOver /> : <CardsList />}
    </div>
  );
}

export default App;
