import { useLocalStorage } from "../../hooks/useLocalStorage";
import styles from "./WatchlistSelector.module.css";

export default function WatchlistSelector({ selectedMovie }) {
  const [watchlist, setWachlist] = useLocalStorage([], "watchlist");

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
    </div>
  );
}
