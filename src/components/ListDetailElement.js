import React from "react";
/*
  Component to divide the list element from the list
*/
function ListDetailElement({ content, feature }) {
  return (
    <li className="detail__listElement">
      <span className="ul__span">{`${content} ${feature}`}</span>
    </li>
  );
}

export default ListDetailElement;
