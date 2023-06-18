import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faEyeSlash, faTrash } from "@fortawesome/free-solid-svg-icons";
import { GlobalContext } from "./context/GlobalContext";
import * as actions from "./context/ActionTypes";

const MovieCardThree = (props) => {
  const { movie } = props;
  const MovieContext = useContext(GlobalContext);
  return (
    <>
      <div className="card card-two">
        <div className="image">
          <div className="icons">
            <span
              onClick={() =>
                MovieContext.movieDispatch({
                  type: actions.MOVE_MOVIE_FROM_WATCHED_TO_WATCHLIST,
                  payload: movie,
                })
              }
            >
              <FontAwesomeIcon icon={faEyeSlash} />
            </span>

            <span
              onClick={() =>
                MovieContext.movieDispatch({
                  type: actions.REMOVE_MOVIE_FROM_WATCHED,
                  payload: movie.imdbID,
                })
              }
            >
              <FontAwesomeIcon icon={faTrash} />
            </span>
          </div>
          <img src={movie.Poster} alt="Movie" loading={"lazy"} />
        </div>
        <div className="info">
          <h3>
            {movie.Title}{" "}
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </h3>
          <p>
            {movie.Year} <span>{movie.Type}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default MovieCardThree;
