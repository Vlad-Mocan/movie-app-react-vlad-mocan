export function useWatchlists() {
  function getItemsFromKey(key) {
    try {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : [];
    } catch (error) {
      console.error("Could not get items from localStorage:", error);
      return [];
    }
  }

  function addValueToEntry(key, movie) {
    try {
      const currentList = getItemsFromKey(key);

      currentList.push(movie);

      localStorage.setItem(key, JSON.stringify(currentList));

      return movie;
    } catch (error) {
      console.error("Could not push items to localStorage:", error);
    }
  }

  function removeValueFromStorage(key, value) {
    console.log(key, value);
  }

  return {
    getItemsFromKey,
    addValueToEntry,
    removeValueFromStorage,
  };
}
