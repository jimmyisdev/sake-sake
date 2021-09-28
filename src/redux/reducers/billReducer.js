import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  checkPleaseStatus: false,
  buyTshirtStatus: false,
  priceList: {
    drinksTotalAmount: 0,
    tshirtPrice: 2000,
    serviceFee: 300,
  },
  allOrderDetail: [   ],
};
const billSlice = createSlice({
  name: "billSlice",
  initialState,
  reducers: {

    makeOrder: (state = initialState, action) => {
      state.allOrderDetail.push(action.payload);
      return state;
    },
    checkPlease: (state = initialState) => {
      return {
        ...state,
        checkPleaseStatus: true,
      };
    },
    buyTshirt: (state = initialState, action) => {
      const newBuyTshirtStatus = !state.buyTshirtStatus;
        return {
          ...state,
          buyTshirtStatus: newBuyTshirtStatus,
        };
    },

  },
});

export const {  makeOrder, checkPlease, buyTshirt } =
  billSlice.actions;
export const billReducer = billSlice.reducer;

