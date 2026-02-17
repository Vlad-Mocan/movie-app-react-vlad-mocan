import { useEffect, useState } from "react";

export function useWatchlists(key = "watchlists") {
  const [watchlists, setWatchlists] = useState(() => {
    try {
      const item = localStorage.getItem(key);

      return item ? JSON.parse(item) : {};
    } catch (error) {
      console.error("Error parsing watchlists:", error);

      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(watchlists));
  }, [key, watchlists]);

  const addMovieToList = (listName, movie) => {
    if (!movie || !listName?.trim()) return;

    setWatchlists((prev) => {
      const currentList = prev[listName] || [];

      const isDuplicate = currentList.some(
        (m) => m.toLowerCase() === movie.toLowerCase(),
      );

      if (isDuplicate) return prev;

      return {
        ...prev,
        [listName]: [...currentList, movie],
      };
    });
  };

  const removeMovieFromList = (listName, movie) => {
    setWatchlists((prev) => {
      const currentList = prev[listName] || [];

      const updatedList = currentList.filter(
        (m) => m.toLowerCase() !== movie.toLowerCase(),
      );

      return {
        ...prev,
        [listName]: updatedList,
      };
    });
  };

  return {
    watchlists,
    watchlistNames: Object.keys(watchlists),
    addMovieToList,
    removeMovieFromList,
    watchlistsContent: Object.values(watchlists),
  };
}
