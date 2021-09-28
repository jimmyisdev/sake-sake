import { configureStore } from "@reduxjs/toolkit";
import { billReducer } from "./reducers/billReducer";
import { cocktailReducer } from "./reducers/cocktailsReducer";
import { roundReducer } from "./reducers/roundReducer";

// function saveToLocalStorage(state){
//     try {
//         const serialisedState = JSON.stringify(state);
//         localStorage.setItem("bill", serialisedState);
//     } catch (error) {
//         console.log(error)
//     }
// }
// const loadFromLocalStorage =()=>{
//     try {
//         const serialisedState =localStorage.getItem("bill");
//         if( serialisedState === null ) return undefined;
//         return JSON.parse(serialisedState);
//     } catch (error) {
//         console.log(error);
//         return undefined;
//     }
// }


const store = configureStore({
  reducer: {
    bill: billReducer,
    cocktail: cocktailReducer,
    round: roundReducer
  },
//   loadFromLocalStorage,
});

// store.subscribe(() => saveToLocalStorage(store.getState()))

store.subscribe(() => store.getState());

export default store;