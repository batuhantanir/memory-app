import React, { useEffect } from "react";
import CardsList from "./components/CardsList";

import { useDispatch } from "react-redux";
import { addCards } from "./redux/cardsSlice";

import Items from "./items/Items";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(addCards({...Items}));
  }, [dispatch]);

  return (
    <div>
      <CardsList />
    </div>
  );
}

export default App;
