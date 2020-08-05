import React from "react";

function ListDetail({ movie }) {
  return (
    <ul className="detail__list">
      <li className="detail__listElement">
        <span className="ul__span">
          Adult Content: {movie?.adult ? "Yes" : "No"}
        </span>
      </li>
      <li className="detail__listElement">
        <span className="ul__span">
          Vote Count: {movie?.vote_count}
        </span>
      </li>
      <li className="detail__listElement">
        <span className="ul__span">
          Vote Average: {movie?.vote_average}
        </span>
      </li>
    </ul>
  );
}

export default ListDetail;
