import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { NavLink, Link } from "react-router-dom";
const Header = () => {
  return (
    <>
      <header>
        <div className="container">
          <div className="logo">
            <Link to="/">
              <img
                src="https://freepngimg.com/thumb/filmstrip/26711-4-pink-filmstrip-photos.png"
                height={40}
                width={40}
              />
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <NavLink to="/">Movies</NavLink>
              </li>
              <li>
                <NavLink to="/to-watch">To Watch</NavLink>
              </li>
              <li>
                <NavLink to="/watched">Watched</NavLink>
              </li>
              <li>
                <NavLink to="/search-add">
                  <FontAwesomeIcon icon={faPlus} />
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};
export default Header;
