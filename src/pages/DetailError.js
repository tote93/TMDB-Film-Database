import React from "react";
/* Just in case someone introduce the url /detail */
function DetailError() {
  return (
    <div className="detail">
      <h1 className="detail__title error">
        ERROR: No movie has been selected to show
      </h1>
    </div>
  );
}

export default DetailError;
