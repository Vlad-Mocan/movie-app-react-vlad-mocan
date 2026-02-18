import styles from "./ListsPage.module.css";

import ListCard from "../../components/ListCard/ListCard";
import useWatchlist from "../../context/useWatchlist";

export default function ListsPage() {
  const { watchlistNames, watchlists } = useWatchlist();

  return (
    <>
      {watchlistNames.length ? (
        <h1 className={styles.numberOfWatchlistsParagraph}>
          you have saved {watchlistNames.length} watchlists:
        </h1>
      ) : (
        <h1 className={styles.numberOfWatchlistsParagraph}>
          you have not saved any watchlist yet
        </h1>
      )}
      <article className={styles.container}>
        <ul className={styles.listContainer}>
          {watchlistNames.map((nameOfWatchlistKey) => (
            <li key={nameOfWatchlistKey}>
              <ListCard
                watchlist={nameOfWatchlistKey}
                watchlistsContent={watchlists[nameOfWatchlistKey]}
              />
            </li>
          ))}
        </ul>
      </article>
    </>
  );
}
