import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export default function MovieList({ moviesData, setSelectedMovie }) {
  return (
    <>
      <ul className={styles.moviesContainer}>
        {moviesData.length ? (
          moviesData.map((movie) => {
            return (
              <li key={movie.id} className={styles.listItem}>
                <MovieCard movie={movie} setSelectedMovie={setSelectedMovie} />
              </li>
            );
          })
        ) : (
          <p className={styles.noMoviesFoundParagraph}>
            no movies found with the specified search
          </p>
        )}
      </ul>
    </>
  );
}
