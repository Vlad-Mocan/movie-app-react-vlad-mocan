import styles from "./MovieCard.module.css";

export default function MovieCard({ movieData }) {
  if (!movieData) return null;

  const { id, title, rating, genre } = movieData;

  return (
    <article className={styles.movieCard}>
      <div className={styles.movieProperties}>
        <p className={styles.placementNumber}>[{id}]</p>
        <div>
          <p className={styles.title}>{title}</p>
          <p className={styles.details}>
            rating: {rating} · genre: {genre}
          </p>
        </div>
      </div>
      <img
        className={styles.image}
        src={`/images/${id}.jpg`}
        alt={`Image for movie: ${title}`}
        loading="lazy"
      />
    </article>
  );
}
