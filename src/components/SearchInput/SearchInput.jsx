import { useState } from "react";
import styles from "./SearchInput.module.css";
import { useSearchParams } from "react-router-dom";

export default function SearchInput() {
  const [isInputSelected, setIsInputSelected] = useState(false);
  const [searchParams, setSearchParams] = useSearchParams();

  const searchQuery = searchParams.get("search") || "";

  const handleSearchInputChange = (event) => {
    const value = event.target.value;

    if (value) {
      setSearchParams({ search: value });
    } else {
      setSearchParams({});
    }
  };

  return (
    <div className={styles.searchContainer}>
      <button
        className={styles.searchButton}
        onClick={() => setIsInputSelected((prev) => !prev)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="0.8rem"
          viewBox="0 -960 960 960"
          width="0.8rem"
          fill={isInputSelected ? "#000" : "#fff"}
          className={styles.searchIcon}
        >
          <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
        </svg>
      </button>

      <input
        type="search"
        name="searchInput"
        id="searchInput"
        value={searchQuery}
        className={styles.searchField}
        style={{
          transition: "opacity 0.3s ease",
          opacity: isInputSelected ? "1" : "0",
          pointerEvents: isInputSelected ? "auto" : "none",
        }}
        onChange={handleSearchInputChange}
      />
    </div>
  );
}
