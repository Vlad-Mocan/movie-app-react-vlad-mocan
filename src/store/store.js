import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from "./watchlistSlice";

export const store = configureStore({
  reducer: {
    watchlists: watchlistReducer,
  },
});
