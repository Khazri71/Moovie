import React, { useContext } from "react";
import MovieCardThree from "./MovieCardThree";
import { GlobalContext } from "./context/GlobalContext";

const Watched = () => {
  const MovieContext = useContext(GlobalContext);
  return (
    <>
      <section className="to-watch ">
        <div className="container">
          <div className="title">
            <h2>Movies Watched</h2>
            <p>
              <span>{MovieContext.watched.length}</span>{" "}
              {MovieContext.watched.length > 1 ? "Movies" : "Movie"}
            </p>
          </div>
          <div className="movies-list">
            {MovieContext.watched.map((movie) => (
              <MovieCardThree key={movie.imdbID} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};
export default Watched;
