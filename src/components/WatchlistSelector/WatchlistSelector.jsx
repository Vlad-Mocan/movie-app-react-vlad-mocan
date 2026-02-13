import { useEffect } from "react";
import styles from "./WatchlistSelector.module.css";
// import { useWatchlists } from "../../hooks/useWatchLists";

export default function WatchlistSelector({ selectedMovie, handleResetMovie }) {
  //   const { getItemsFromKey, addValueToEntry } = useWatchlists();

  useEffect(() => {
    console.log("Test");
    // console.log(addValueToEntry("KEY", "test"));
    // console.log(getItemsFromKey("KEY"));
  });

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") handleResetMovie();
    };

    if (selectedMovie) {
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedMovie, handleResetMovie]);

  return (
    <div
      className={`${styles.container} ${selectedMovie ? styles.active : ""}`}
    >
      <label htmlFor="list-input" className={styles.listLabel}>
        please select the list you wish to add your movie to:{" "}
        <span>{selectedMovie}</span>
      </label>
      <input list="list-collection" id="list-input" name="list"></input>

      <datalist id="list-collection">
        <option value="movies I liked in 2025"></option>
        <option value="movies to watch in 2026"></option>
        <option value="create new list"></option>
      </datalist>

      <button className={styles.closeIcon} onClick={handleResetMovie}>
        &#10005;
      </button>
    </div>
  );
}
