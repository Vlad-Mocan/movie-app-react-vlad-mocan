import { createSelector, createSlice } from "@reduxjs/toolkit";

const KEY = "watchlists";

const getInitialState = () => {
  try {
    const item = localStorage.getItem(KEY);
    return item ? JSON.parse(item) : {};
  } catch (error) {
    console.error("Error parsing watchlists:", error);
    return {};
  }
};

export const watchlistSlice = createSlice({
  name: "watchlists",
  initialState: getInitialState(),
  reducers: {
    addMovieToList: (state, action) => {
      const { listName, movie } = action.payload;

      if (!movie || !listName?.trim()) return;

      if (!state[listName]) {
        state[listName] = [];
      }

      const isDuplicate = state[listName].some(
        (m) => m.toLowerCase() === movie.toLowerCase(),
      );

      if (!isDuplicate) {
        state[listName].push(movie);
      }
    },

    removeMovieFromList: (state, action) => {
      const { listName, movie } = action.payload;

      if (!movie || !listName?.trim()) return;

      if (!state[listName]) {
        state[listName] = [];
      }

      const updatedList = state[listName].filter(
        (m) => m.toLowerCase() !== movie.toLowerCase(),
      );

      state[listName] = updatedList;
    },
  },
});

export const { addMovieToList, removeMovieFromList } = watchlistSlice.actions;
export default watchlistSlice.reducer;

export const selectWatchlists = (state) => state?.watchlists;

export const selectWatchlistsOfMovie = createSelector(
  [selectWatchlists, (state, movie) => movie],
  (watchlists, movie) => {
    if (!movie) return [];
    return Object.entries(watchlists)
      .filter(([, movies]) =>
        movies.some((m) => m.toLowerCase() === movie.toLowerCase()),
      )
      .map(([name]) => name);
  },
);

export const selectMoviesSavedInWatchlists = createSelector(
  [selectWatchlists],
  (watchlists) => Object.values(watchlists).flat(),
);

export const selectWatchlistNames = createSelector(
  [selectWatchlists],
  (watchlists) => Object.keys(watchlists),
);
