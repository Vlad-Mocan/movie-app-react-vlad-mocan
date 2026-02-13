import { useState } from "react";
import MovieList from "../../components/MovieList/MovieList";
import Loader from "../../components/ui/Loader/Loader";
import WatchlistSelector from "../../components/WatchlistSelector/WatchlistSelector";
import { useFetch } from "../../hooks/useFetch";
import styles from "./LandingPage.module.css";

export default function LandingPage() {
  const { data: moviesData, isLoading, error } = useFetch("/movies.json");
  const [selectedMovie, setSelectedMovie] = useState(null);

  if (isLoading)
    return (
      <section className={styles.container}>
        <Loader />
      </section>
    );

  if (error) {
    return (
      <section className={styles.container}>
        <p className={styles.errorText}>
          movies could not be loaded, please try again later
        </p>
      </section>
    );
  }

  if (!moviesData || moviesData.length === 0) {
    return (
      <section className={styles.container}>
        <p>No movies found at the moment.</p>
      </section>
    );
  }

  const handleResetMovie = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      <section className={styles.container}>
        <h1 className={styles.numberOfMoviesParagraph}>
          there are {moviesData.length} films to choose from:
        </h1>
        <MovieList
          moviesData={moviesData}
          setSelectedMovie={setSelectedMovie}
        />
      </section>

      <WatchlistSelector
        selectedMovie={selectedMovie}
        handleResetMovie={handleResetMovie}
      />
    </>
  );
}
