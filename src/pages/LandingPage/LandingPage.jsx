import MovieCard from "../../components/MovieCard/MovieCard";
import moviesData from "../../data/movies.json";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  return (
    <section className={styles.container}>
      <p className={styles.numberOfMoviesParagraph}>
        there are {moviesData.length} films to choose from:
      </p>
      <ul className={styles.moviesContainer}>
        {moviesData.map((movie) => (
          <>
            <li key={movie.id}>
              <MovieCard movieData={movie} />
            </li>
          </>
        ))}
      </ul>
    </section>
  );
}
