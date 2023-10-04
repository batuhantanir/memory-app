import { createEntityAdapter, createSlice } from "@reduxjs/toolkit";

export const cardsAdaptor = createEntityAdapter();
const initialState = cardsAdaptor.getInitialState();

export const cardsSelector = cardsAdaptor.getSelectors(state=>state.cards)

export const cardsSlice = createSlice({
  name: "cards",
  initialState,
  reducers: {
    addCards: cardsAdaptor.addMany,
  },
});

export const { addCards } = cardsSlice.actions;

export default cardsSlice.reducer;
