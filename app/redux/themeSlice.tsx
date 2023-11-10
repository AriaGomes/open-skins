import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface ThemeState {
  value: string;
}

// Define the initial state using that type
const initialState: ThemeState = {
  value: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme;

export default themeSlice.reducer;
