import { Link } from "react-router-dom";
import { BookmarkFilled, BookmarkOutline } from "../ui/Boomarks/Bookmarks";
import styles from "./MovieCard.module.css";
import { selectMoviesSavedInWatchlists } from "../../store/watchlistSlice";
import { useSelector } from "react-redux";

export default function MovieCard({ movie, setSelectedMovie }) {
  const { id, title, rating, genre } = movie;

  const moviesSavedInWatchlists = useSelector(selectMoviesSavedInWatchlists);

  const isSavedInWatchlist = moviesSavedInWatchlists.some(
    (movieInWatchlist) =>
      movieInWatchlist.toLowerCase() === title.toLowerCase(),
  );

  if (!movie) return null;

  const handleWatchlistClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedMovie(title);
  };

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
            onClick={handleWatchlistClick}
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
