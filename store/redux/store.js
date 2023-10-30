import { configureStore } from "@reduxjs/toolkit";
import favouriteReducer from "./FavouriteSlice.js";

export const store = configureStore({
  reducer: {
    favourites: favouriteReducer,
  },
});
