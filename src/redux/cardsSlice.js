import { createSlice } from "@reduxjs/toolkit";
import Items from "../items/Items";

export const cardsSlice = createSlice({
  name: "cards",
  initialState: {
    cards: Items.sort(() => 0.5 - Math.random()),
    point: 0,
    isAllChecked: false,
  },
  reducers: {
    getCards: (state) => {
      window.location.reload();
    },
    updateShow: (state, action) => {
      state.cards.find((item) => item.id === action.payload).show = true;
    },
    updateChecked: (state, { payload }) => {
      // console.log(payload);
      if (payload.equal === true) {
        // console.log("equal");
        state.cards.find(
          (item) => item.id === payload.firstCardId
        ).checked = true;
        state.cards.find(
          (item) => item.id === payload.secondCardId
        ).checked = true;
        state.point += 50;
      } else if (payload.equal === false) {
        // console.log(" not equal");
        state.point -= 10;
        state.cards.find(
          (item) => item.id === payload.firstCardId
        ).show = false;
        state.cards.find(
          (item) => item.id === payload.secondCardId
        ).show = false;
      }
    },
    isAllCheck: (state) => {
      if (
        state.cards.filter((item) => item.checked === true).length ==
        state.cards.length
      ) {
        state.isAllChecked = true;
        state.cards = [];
      }
    },
  },
});

export const { updateShow, updateChecked, isAllCheck, getCards } =
  cardsSlice.actions;

export default cardsSlice.reducer;
