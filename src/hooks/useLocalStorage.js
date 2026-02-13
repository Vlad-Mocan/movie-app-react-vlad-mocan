import { useEffect, useState } from "react";

export function useLocalStorage(initialState, key) {
  const [value, setValue] = useState(() => {
    try {
      const storedValue = localStorage.getItem(key);
      return storedValue ? JSON.parse(storedValue) : initialState;
    } catch (error) {
      console.error(
        `Error reading localStorage for key: ${key} with error: ${error}`,
      );
      return initialState;
    }
  });

  useEffect(
    function () {
      try {
        localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.error(
          `Error storing in localStorage for the key: ${key} with error: ${error}`,
        );
      }
    },
    [value, key],
  );

  return [value, setValue];
}
