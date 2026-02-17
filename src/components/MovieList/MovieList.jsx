import { useSearchParams } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";
import { useWatchlists } from "../../hooks/useWatchLists";

export default function MovieList({ moviesData, setSelectedMovie }) {
  const [searchParams] = useSearchParams();
  const { moviesSavedInWatchlists } = useWatchlists();
  const searchQuery = searchParams.get("search")?.toLowerCase() ?? "";

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery),
  );

  return (
    <ul className={styles.moviesContainer}>
      {filteredMovies.length ? (
        filteredMovies.map((movie) => {
          const isSavedInWatchlist = moviesSavedInWatchlists.some(
            (movieInWatchlist) => movieInWatchlist === movie.title,
          );
          return (
            <li key={movie.id} className={styles.listItem}>
              <MovieCard
                movieData={movie}
                setSelectedMovie={setSelectedMovie}
                isSavedInWatchlist={isSavedInWatchlist}
              />
            </li>
          );
        })
      ) : (
        <p className={styles.noMoviesFoundParagraph}>
          no movies found with the specified search
        </p>
      )}
    </ul>
  );
}
