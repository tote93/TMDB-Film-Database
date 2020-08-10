import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./styles/Row.css";
import { useStateValue } from "../StateProvider";
import { Link } from "react-router-dom";
// Base url to get the images
const baseUrl = "https://image.tmdb.org/t/p/original/";

/* 
  Component that display each ROW of films/series
*/
function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [{}, dispatch] = useStateValue();
  // Use useEffect hook to get an async promise from axios
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    // each time that fetchUrl changes, useEffect will be executed
    fetchData();
  }, [fetchUrl]);

  // Control the click event when select a film
  const handleClick = (e) => {
    const movieSelected = movies.filter((film) => {
      return (
        (film?.name || film?.title || film?.original_title) === e.target.alt
      );
    });
    // Dispatch the event to the global state
    dispatch({
      type: "SET__DETAIL_MOVIE",
      movie: movieSelected[0],
    });
  };

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie, i) => {
          return (
            <Link key={movie.id} to="/detail">
              <img
                onClick={handleClick}
                className="row__film"
                src={`${baseUrl}${movie?.poster_path}`}
                alt={movie?.name || movie?.title || movie?.original_title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
