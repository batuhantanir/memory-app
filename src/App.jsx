import React from "react";
import CardsList from "./components/CardsList";
import Header from "./components/Header";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <Header />
      <CardsList />
    </div>
  );
}

export default App;
