import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface FilterState {
  search: string;
  category: string;
}

// Define the initial state using that type
const initialState: FilterState = {
  search: "",
  category: "",
};

export const filterSlice = createSlice({
  name: "filter",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory, setSearch } = filterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const filterSearch = (state: RootState) => state.filter.search;
export const filterCategory = (state: RootState) => state.filter.category;

export default filterSlice.reducer;
