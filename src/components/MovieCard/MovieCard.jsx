import styles from "./MovieCard.module.css";

export default function MovieCard({ movieData, setSelectedMovie }) {
  if (!movieData) return null;

  const { id, title, rating, genre } = movieData;

  return (
    <>
      <article className={styles.movieCard}>
        <div className={styles.movieProperties}>
          <p className={styles.placementNumber}>[{id}]</p>
          <div>
            <p className={styles.title}>{title}</p>
            <p className={styles.details}>
              rating: {rating} · genre: {genre}
            </p>
          </div>

          <button
            className={styles.movieOptionsButton}
            onClick={() => setSelectedMovie(title)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              viewBox="0 -960 960 960"
              width="14px"
              fill="#fff"
            >
              <path d="M200-120v-640q0-33 23.5-56.5T280-840h400q33 0 56.5 23.5T760-760v640L480-240 200-120Zm80-122 200-86 200 86v-518H280v518Zm0-518h400-400Z" />
            </svg>
          </button>
        </div>
        <img
          className={styles.image}
          src={`/images/${id}.jpg`}
          alt={`Image for movie: ${title}`}
          loading="lazy"
        />
      </article>
    </>
  );
}
