import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlassPlus } from "@fortawesome/free-solid-svg-icons";
import MovieCardSearch from "./MovieCardSearch";
import axios from "axios";

const SearchAdd = () => {
  const [searchValue, setSearchValue] = useState("");
  const [searchMovie, setSearchMovie] = useState([]);
  useEffect(() => {
    axios
      .get(`http://www.omdbapi.com/?s=${searchValue}&apikey=aa26db92`)
      .then((response) => response.data.Search)
      .then((data) => {
        console.log(data);
        setSearchMovie(data);
      })
      .catch((err) => console.log(err.message));
  }, [searchValue]);
  return (
    <>
      <section className="search-add">
        <div className="container">
          {/* <h1>Search And Add</h1> */}
          <div className="search">
            <input
              type="search"
              placeholder="Seach Movie..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </div>

          <div className="movies-list">
            {searchMovie &&
              searchMovie.map((movie) => (
                <MovieCardSearch key={movie.imdbID} movie={movie} />
              ))}
            <p>Search Movies , Series ...</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchAdd;
