import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface CurrencyState {
  value: string;
}

// Define the initial state using that type
const initialState: CurrencyState = {
  value: "USD",
};

export const currencySlice = createSlice({
  name: "currency",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setCurrency: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrency } = currencySlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCurrency = (state: RootState) => state.currency;

export default currencySlice.reducer;
