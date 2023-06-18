import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCardOne = (props) => {
  const { movie } = props;
  return (
    <>
      <div className="card card-one">
        <div className="image">
          <img src={movie.Poster} alt="Movie" loading="lazy" />
        </div>
        <div className="info">
          <h3>
            {movie.Title}{" "}
            <span>
              <FontAwesomeIcon icon={faStar} />
            </span>
          </h3>
          <p>{movie.Year}</p>
        </div>
      </div>
    </>
  );
};

export default MovieCardOne;
