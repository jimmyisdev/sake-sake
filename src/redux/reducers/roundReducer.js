import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderList: [ ],
};

const roundSlice = createSlice({
  name: "roundSlice",
  initialState,
  reducers: {
    addToRound: (state = initialState, action) => {
      state.orderList.push(action.payload);
      return state;
    }, 
    deleteOrder:(state = initialState, action)=>{
      const deleterOrderDrink = action.payload.orderDrink;
      const deleteItemAmount = action.payload.itemAmount;
      const newOrderList = (state.orderList = state.orderList.filter(
        (item) =>
          item.orderDrink !== deleterOrderDrink ||
          item.itemAmount !== deleteItemAmount
      ));

      state.orderList = newOrderList;
　　　   return state;

    },
    clearRound: (state = initialState) => {
      state.orderList = [];
      return state;
    },
  },
});

export const { addToRound, deleteOrder, clearRound } = roundSlice.actions;
export const roundReducer = roundSlice.reducer;
