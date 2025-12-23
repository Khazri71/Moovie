import React, { useEffect, useState } from "react";
import MovieCardOne from "./MovieCardOne";
import axios from "axios";

const Home = () => {
  const [moviesHome, setMoviesHome] = useState([]);

  useEffect(() => {
    axios
      .get("https://www.omdbapi.com/?s=kim&apikey=aa26db92")
      .then((response) => setMoviesHome(response.data.Search))
      .catch((err) => console.log(err.message));
  }, [moviesHome]);

  return (
    <>
      <section className="home">
        <div className="container">
          <h1>Recomended to you</h1>

          <div className="movies">
            <div className="movie"> </div>
            <div className="movies-list">
              {moviesHome.map((movie) => (
                <MovieCardOne key={movie.imdbID} movie={movie} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
