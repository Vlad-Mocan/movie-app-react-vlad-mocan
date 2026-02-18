import { Link } from "react-router-dom";
import useWatchlist from "../../context/useWatchlist";
import { BookmarkFilled, BookmarkOutline } from "../ui/Boomarks/Bookmarks";
import styles from "./MovieCard.module.css";

export default function MovieCard({ movie, setSelectedMovie }) {
  const { id, title, rating, genre } = movie;

  const { moviesSavedInWatchlists } = useWatchlist();

  const isSavedInWatchlist = moviesSavedInWatchlists.some(
    (movieInWatchlist) =>
      movieInWatchlist.toLowerCase() === title.toLowerCase(),
  );

  if (!movie) return null;

  return (
    <Link to={`/movie/${id}`}>
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
            {isSavedInWatchlist ? <BookmarkFilled /> : <BookmarkOutline />}
          </button>
        </div>
        <img
          className={styles.image}
          src={`/images/${id}.jpg`}
          alt={`Image for movie: ${title}`}
          loading="lazy"
        />
      </article>
    </Link>
  );
}
