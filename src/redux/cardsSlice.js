import { createSlice } from "@reduxjs/toolkit";
import Items from "../items/Items";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: Items.sort( () => .5 - Math.random() ),
    point:0,
  },
  reducers: {

  },
});

export const { addCards  } = cardsSlice.actions;

export default cardsSlice.reducer;
