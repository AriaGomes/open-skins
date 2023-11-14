import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./redux/themeSlice";
import currencyReducer from "./redux/currencySlice";
import languageReducer from "./redux/languageSlice";
import filterReducer from "./redux/filterSlice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    currency: currencyReducer,
    language: languageReducer,
    filter: filterReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
