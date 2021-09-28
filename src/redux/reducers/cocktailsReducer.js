import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const cocktailUrl = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s="
const taskName = "cocktails";

export const getCocktails = createAsyncThunk(
  `${taskName}/getCocktails`,
  async (searchTerm) => {
        try {
          const response = await fetch(`${cocktailUrl}${searchTerm}`);
          const data = await response.json();
          const { drinks } =  data;
          return drinks;
        } catch (error) {
          throw Error(error);
        }
  }
);
const cocktailsSlice = createSlice({
  name: taskName,
  initialState: {
    items: [],
    isLoading: true,
  },
  extraReducers:  {
    
    [getCocktails.pending]: (state) => {
        state.status = "loading";
        state.isLoading = true;
        state.items = [];
    },
    [getCocktails.fulfilled]: (state, { payload }) => {
        state.status = "success";
        state.items = payload;
        state.isLoading = false;        
    },
    [getCocktails.rejected]: (state) => {
        state.status = "failed";
        state.isLoading = false;
        state.items = [];
    },
  },
});


export  const cocktailReducer = cocktailsSlice.reducer;


