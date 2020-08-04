import React, { useEffect, useState } from "react";
import axios from "../axios";
import "./styles/Row.css";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  // Use useEffect hook, when every time [fecthUrl] changes, will execute this hook
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  console.table(movies);
  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__posters">
        {movies.map((movie, i) => {
          return (
            <img
              key={movie.id}
              className="row__film"
              src={`${baseUrl}${movie?.poster_path}`}
              alt={movie?.name || movie?.title || movie?.original_title}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Row;
