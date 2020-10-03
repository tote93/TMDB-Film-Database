import React from "react";
import ListDetailElement from "./ListDetailElement";
/* 
  Generate a list with <li> subelements as components
*/
function ListDetail({ movie }) {
  return (
    <ul className="detail__list">
      <ListDetailElement
        content="Adult Content:"
        feature={movie.adult ? "Yes" : "No"}
      />
      <ListDetailElement content="Vote Count:" feature={movie.vote_count} />
      <ListDetailElement
        content="Vote Average:"
        feature={movie.vote_average}
      />
    </ul>
  );
}

export default ListDetail;
