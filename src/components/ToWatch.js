import React, { useContext } from "react";
import MovieCardTwo from "./MovieCardTwo";
import { GlobalContext, useMovieContext } from "./context/GlobalContext";

const ToWatch = () => {
  const MovieContext = useContext(GlobalContext);
  return (
    <>
      <section className="to-watch ">
        <div className="container">
          <div className="title">
            <h2>Movies To Watch</h2>
            <p>
              <span>{MovieContext.watchlist.length}</span>{" "}
              {MovieContext.watchlist.length > 1 ? "Movies" : "Movie"}
            </p>
          </div>
          <div className="movies-list">
            {MovieContext.watchlist.map((movie) => (
              <MovieCardTwo key={movie.imdbId} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ToWatch;
