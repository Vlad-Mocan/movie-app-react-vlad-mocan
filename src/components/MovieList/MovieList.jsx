import { useSearchParams } from "react-router-dom";
import MovieCard from "../MovieCard/MovieCard";
import styles from "./MovieList.module.css";

export default function MovieList({ moviesData, setSelectedMovie }) {
  const [searchParams] = useSearchParams();

  const searchQuery = searchParams.get("search")?.toLowerCase() ?? "";
  console.log(searchQuery);

  const filteredMovies = moviesData.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery),
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
