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

        try {
          localStorage.setItem(KEY, JSON.stringify(state));
        } catch (error) {
          console.error("Could not save to localStorage.", error);
        }
      }
    },

    removeMovieFromList: (state, action) => {
      const { listName, movie } = action.payload;

      if (!movie || !state[listName]) return;

      state[listName] = state[listName].filter(
        (m) => m.toLowerCase() !== movie.toLowerCase(),
      );

      try {
        localStorage.setItem(KEY, JSON.stringify(state));
      } catch (error) {
        console.error("Could not save to localStorage.", error);
      }
    },
  },
});

export const { addMovieToList, removeMovieFromList } = watchlistSlice.actions;
export default watchlistSlice.reducer;

export const selectWatchlistsOfMovie = createSelector(
  [(state) => state.watchlists, (_, movie) => movie],
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
  [(state) => state.watchlists],
  (watchlists) => Object.values(watchlists).flat(),
);

export const selectWatchlistNames = createSelector(
  [(state) => state.watchlists],
  (watchlists) => Object.keys(watchlists),
);
