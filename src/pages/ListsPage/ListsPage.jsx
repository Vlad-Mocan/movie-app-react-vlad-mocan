import styles from "./ListsPage.module.css";

import { useWatchlists } from "../../hooks/useWatchLists";
import ListCard from "../../components/ListCard/ListCard";

export default function ListsPage() {
  const { watchlistNames, watchlists } = useWatchlists();

  return (
    <>
      <h1 className={styles.numberOfWatchlistsParagraph}>
        you have saved {watchlistNames.length} watchlists:
      </h1>
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
