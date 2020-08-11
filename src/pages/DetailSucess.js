import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import VideoPlayer from "../components/VideoPlayer";
import ListDetail from "../components/ListDetail";

const baseUrl = "https://image.tmdb.org/t/p/original/";

/* Success details of the films */
function DetailSucess() {
  const [{ movieSelected }] = useStateValue();
  // playVideo determines when the user has pressed the play button
  const [playVideo, setPlayVideo] = useState(false);
  // Truncate the description to n number of characters adding "..." at the end
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  return (
    <div className="detail">
      <h1 className="detail__title">
        {movieSelected?.name ||
          movieSelected?.title ||
          movieSelected?.original_title}
      </h1>
      <div className="detail__content">
        <div className="detail__info">
          <h2 className="detail__subtitle">Description</h2>
          <div className="detail__movieDescription">
            <h3 className="detail__description">
              {truncate(movieSelected.overview, 200)}
            </h3>
          </div>
          <div className="detail__additionalInfo">
            <h2 className="detail__metadata">Additional Information:</h2>
            <ListDetail movie={movieSelected} />
          </div>
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="detail__playButton"
          >
            Play
          </button>
        </div>
        <div className="detail__poster">
          <VideoPlayer
            playVideo={playVideo}
            poster={
              movieSelected.poster_path
                ? `${baseUrl}${movieSelected?.poster_path}`
                : "https://m.gardensbythebay.com.sg/etc/designs/gbb/clientlibs/images/common/not_found.jpg"
            }
            cssClassName="detail__imagePoster"
          />
        </div>
      </div>
    </div>
  );
}

export default DetailSucess;
