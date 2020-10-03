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

  const [{ }, dispatch] = useStateValue();  //eslint-disable-line no-empty-pattern

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Control the click event when select a film
  const handleClick = (movie) => {
    const movieSelected = movies.find((film) => film.title === movie.title);

    // Dispatch the event to the global state
    dispatch({
      type: "SET__DETAIL_MOVIE",
      movie: movieSelected,
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
                onClick={() => handleClick(movie)}
                className="row__film"
                src={
                  movie?.poster_path
                    ? `${baseUrl}${movie.poster_path}`
                    : "https://m.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg"
                }
                alt={movie.name || movie.title || movie.original_title}
                title={movie.name || movie.title || movie.original_title}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Row;
