import styles from "./MoviePage.module.css";

import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import Loader from "../../components/ui/Loader/Loader";

export default function MoviePage() {
  const { id } = useParams();

  const { data: allMovies, isLoading, error } = useFetch("/movies.json");

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
          movie could not be loaded, please try again later
        </p>
      </section>
    );
  }

  const movie = allMovies.filter((m) => m.id === Number(id))[0];
  console.log(movie);

  return (
    <div className={styles.container}>
      <div>
        <p className={styles.movieName}>{movie?.title}</p>
        <p className={styles.details}>
          genre: {movie?.genre}, rating: {movie?.rating}
        </p>
      </div>
      <img
        className={styles.image}
        src={`/images/${id}.jpg`}
        alt={`Image for movie: ${movie?.title}`}
        loading="lazy"
      />{" "}
    </div>
  );
}
