import React, { useState } from "react";
import { useStateValue } from "../StateProvider";
import "./styles/Detail.css";
import VideoPlayer from "../components/VideoPlayer";
const baseUrl = "https://image.tmdb.org/t/p/original/";

function Detail() {
  const [{ movieSelected }] = useStateValue();
  const [playVideo, setPlayVideo] = useState(false);

  // Truncate the description to n number of characters adding "..." at the end
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }
  console.log(movieSelected);
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
            <ul className="detail__list">
              <li className="detail__listElement">
                <span className="ul__span">
                  Adult Content: {movieSelected?.adult ? "Yes" : "No"}
                </span>
              </li>
              <li className="detail__listElement">
                <span className="ul__span">
                  Vote Count: {movieSelected?.vote_count}
                </span>
              </li>
              <li className="detail__listElement">
                <span className="ul__span">
                  Vote Average: {movieSelected?.vote_average}
                </span>
              </li>
            </ul>
          </div>
          <button
            onClick={() => setPlayVideo(!playVideo)}
            className="detail__playButton"
          >
            Play
          </button>
        </div>
        <div className="detail__poster">
          {/*           <img
            src={`${baseUrl}${movieSelected?.poster_path}`}
            alt={
              movieSelected?.name ||
              movieSelected?.title ||
              movieSelected?.original_title
            }
            className="detail__imagePoster"
          /> */}
          <VideoPlayer
            playVideo={playVideo}
            poster={`${baseUrl}${movieSelected?.poster_path}`}
            cssClassName="detail__imagePoster"
          />
        </div>
      </div>
    </div>
  );
}

export default Detail;
