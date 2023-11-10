import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface LanguageState {
  value: string;
}

// Define the initial state using that type
const initialState: LanguageState = {
  value: "en",
};

export const languageSlice = createSlice({
  name: "language",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLanguage: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setLanguage } = languageSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectLanguage = (state: RootState) => state.language;

export default languageSlice.reducer;
