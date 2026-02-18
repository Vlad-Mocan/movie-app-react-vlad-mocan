import styles from "./ListCard.module.css";

const movieDisplayLimit = 5;

export default function ListCard({ watchlist, watchlistsContent }) {
  const moviesToShow = watchlistsContent.slice(0, movieDisplayLimit);
  const extraCount = watchlistsContent.length - movieDisplayLimit;

  return (
    <div className={styles.container}>
      <p>{watchlist}</p>

      <div className={styles.popUpContainer}>
        {moviesToShow.map((name, index) => (
          <span key={index} className={styles.movieItem}>
            {name}
          </span>
        ))}
        {extraCount > 0 && <span>...and {extraCount} more</span>}
      </div>
    </div>
  );
}
