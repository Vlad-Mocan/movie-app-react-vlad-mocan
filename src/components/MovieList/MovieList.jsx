import { useOutletContext } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export default function MovieList({ moviesData, setSelectedMovie }) {
  const { searchQuery } = useOutletContext();

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  return (
    <ul className={styles.moviesContainer}>
      {filteredMovies.map((movie) => (
        <li key={movie.id} className={styles.listItem}>
          <MovieCard movieData={movie} setSelectedMovie={setSelectedMovie} />
        </li>
      ))}
    </ul>
  );
}
