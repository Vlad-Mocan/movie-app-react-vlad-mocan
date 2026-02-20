import styles from "./ListsPage.module.css";

import ListCard from "../../components/ListCard/ListCard";

import { useSelector } from "react-redux";
import { selectWatchlistNames } from "../../store/watchlistSlice";

export default function ListsPage() {
  const watchlistNames = useSelector(selectWatchlistNames);
  const watchlists = useSelector((state) => state.watchlists);

  console.log(" TESTETSETWTSET", watchlists);

  return (
    <>
      {watchlistNames.length ? (
        <h1 className={styles.numberOfWatchlistsParagraph}>
          you have saved {watchlistNames.length} watchlists:
        </h1>
      ) : (
        <h1 className={styles.numberOfWatchlistsParagraph}>
          you have not saved any watchlists yet
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
