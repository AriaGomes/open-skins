import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";

// Define a type for the slice state
export interface SidebarState {
  value: boolean;
}

// Define the initial state using that type
const initialState: SidebarState = {
  value: false,
};

export const sidebarSlice = createSlice({
  name: "sidebar",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    toggleSidebar: (state, action: PayloadAction<string>) => {
      state.value = !action.payload;
    },
  },
});

export const { toggleSidebar } = sidebarSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectSideabr = (state: RootState) => state.sidebar;

export default sidebarSlice.reducer;
