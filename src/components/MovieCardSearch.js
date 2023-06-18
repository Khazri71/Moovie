import React, { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import * as actions from "./context/ActionTypes";
const MovieCardSearch = (props) => {
  const { movie } = props;
  const MovieContext = useContext(GlobalContext);
  const existMovieToWatchlist = MovieContext.watchlist.find(
    (mo) => mo.imdbID === movie.imdbID
  );

  const existMovieWatched = MovieContext.watched.find(
    (mo) => mo.imdbID === movie.imdbID
  );

  const watchlistDisabled = existMovieToWatchlist
    ? true
    : existMovieWatched
    ? true
    : false;
  const watchedDisabled = existMovieWatched ? true : false;
  return (
    <>
      <div className="card-search">
        <div className="image">
          {movie.Poster ? <img src={movie.Poster} alt="Movie" loading={"lazy"}/> : " "}
        </div>

        <div className="info">
          <h3>
            {movie.Title}{" "}
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </h3>
          <p>
            {movie.Year ? movie.Year : "----"}
            <span>{movie.Type}</span>
          </p>
          <p></p>
          <div className="add-btn">
            <button
              disabled={watchlistDisabled}
              onClick={() =>
                MovieContext.movieDispatch({
                  type: actions.ADD_MOVIE_TO_WATCHLIST,
                  payload: movie,
                })
              }
            >
              Add To Watch
            </button>
            <button
              disabled={watchedDisabled}
              onClick={() =>
                MovieContext.movieDispatch({
                  type: actions.ADD_MOVIE_WATCHED,
                  payload: movie,
                })
              }
            >
              Add Watched
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MovieCardSearch;
