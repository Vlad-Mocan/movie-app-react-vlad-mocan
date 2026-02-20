import { store } from "./store";

let previousWatchlists = store.getState().watchlists;

store.subscribe(() => {
  const currentWatchlists = store.getState().watchlists;

  if (currentWatchlists !== previousWatchlists) {
    try {
      localStorage.setItem(
        "watchlists",
        JSON.stringify(store.getState().watchlists),
      );
      previousWatchlists = currentWatchlists;
    } catch (error) {
      console.error("saving to localhost failed ", error);
    }
  }
});
