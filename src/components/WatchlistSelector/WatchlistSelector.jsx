import { useEffect, useState } from "react";
import styles from "./WatchlistSelector.module.css";
import useWatchlist from "../../context/useWatchlist";

export default function WatchlistSelector({ selectedMovie, handleResetMovie }) {
  const {
    watchlistNames,
    addMovieToList,
    getWatchlistsOfMovie,
    removeMovieFromList,
  } = useWatchlist();
  const [selectedList, setSelectedList] = useState("");

  const currentMovieWatchlists = selectedMovie
    ? getWatchlistsOfMovie(selectedMovie)
    : [];

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

  function handleSubmit(e) {
    e.preventDefault();

    if (selectedList && selectedMovie) {
      addMovieToList(selectedList, selectedMovie);

      setSelectedList("");
      e.currentTarget.reset();
      handleResetMovie();
    }
  }

  return (
    <>
      <form
        className={`${styles.container} ${selectedMovie ? styles.active : ""}`}
        onSubmit={handleSubmit}
      >
        {currentMovieWatchlists.length > 0 && (
          <div className={styles.statusContainer}>
            <p>already in watchlists:</p>
            {currentMovieWatchlists.map((watchlist) => (
              <p
                key={watchlist}
                className={styles.watchlistItem}
                onClick={() => removeMovieFromList(watchlist, selectedMovie)}
              >
                {watchlist}
              </p>
            ))}
          </div>
        )}
        <label htmlFor="list-input" className={styles.listLabel}>
          please select the list <br /> you wish to add your movie to:
        </label>
        <input
          list="list-collection"
          id="list-input"
          name="list"
          className={styles.watchlistInput}
          value={selectedList}
          onChange={(e) => setSelectedList(e.target.value)}
        ></input>

        <datalist id="list-collection">
          {watchlistNames
            .filter((name) => !currentMovieWatchlists.includes(name))
            .map((name) => (
              <option key={name} value={name} />
            ))}
        </datalist>

        <button className={styles.submitBtn} type="submit">
          add
        </button>

        <button
          type="button"
          name="submit-btn"
          className={styles.closeIcon}
          onClick={handleResetMovie}
        >
          &#10005;
        </button>
      </form>
    </>
  );
}
