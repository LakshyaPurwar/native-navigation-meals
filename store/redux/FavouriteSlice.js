import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ids: [],
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState: initialState,
  reducers: {
    addFavourite(state, action) {
      const id = action.payload.id;
      state.ids.push(id);
    },
    removeFavourite(state, action) {
      const id = action.payload.id;
      state.ids = state.ids.filter(
        (currentId) => currentId != action.payload.id
      );
    },
  },
});

export default favouritesSlice.reducer;
export const addFavourite = favouritesSlice.actions.addFavourite;
export const removeFavourite = favouritesSlice.actions.removeFavourite;
