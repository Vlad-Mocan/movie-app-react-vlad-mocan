import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export default function MovieList({ moviesData, setSelectedMovie }) {
  return (
    <ul className={styles.moviesContainer}>
      {moviesData.map((movie) => (
        <li key={movie.id}>
          <MovieCard movieData={movie} setSelectedMovie={setSelectedMovie} />
        </li>
      ))}
    </ul>
  );
}
