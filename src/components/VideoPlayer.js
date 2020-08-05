import React from "react";
import "shaka-player/dist/controls.css";
import "./styles/VideoPlayer.css";
import { useEffect } from "react";
const shaka = require("shaka-player/dist/shaka-player.ui.js");

//Creating class component
function VideoPlayer({ cssClassName, poster, playVideo }) {
  const videoComponent = React.createRef(null);

  //Creating reference to store video container on DOM
  const videoContainer = React.createRef(null);

  const onErrorEvent = (event) => {
    // Extract the shaka.util.Error object from the event.
    onError(event.detail);
  };

  const onError = (error) => {
    // Log the error.
    console.error("Error code", error.code, "object", error);
  };
  useEffect(() => {
    if (playVideo) {
      //Link to MPEG-DASH video
      var manifestUri =
        "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8";

      //Getting reference to video and video container on DOM
      const video = videoComponent.current;
      const currentVideoContainer = videoContainer.current;

      //Initialize shaka player
      var player = new shaka.Player(video);

      //Setting UI configuration JSON object
      const uiConfig = {};

      //Configuring elements to be displayed on video player control panel
      uiConfig["controlPanelElements"] = ["volume", "fullscreen"];

      //Setting up shaka player UI
      const ui = new shaka.ui.Overlay(player, currentVideoContainer, video);

      ui.configure(uiConfig); //configure UI
      ui.getControls();

      // Listen for error events.
      player.addEventListener("error", onErrorEvent);
      player.configure("manifest.defaultPresentationDelay", 0);
      // Try to load a manifest.
      // This is an asynchronous process.
      player
        .load(manifestUri)
        .then(function () {
          // This runs if the asynchronous load is successful.
          console.log("The video has now been loaded!");
          if (video.requestFullscreen) {
            video.requestFullscreen();
          } else if (video.mozRequestFullScreen) {
            video.mozRequestFullScreen();
          } else if (video.webkitRequestFullscreen) {
            video.webkitRequestFullscreen();
          } else if (video.msRequestFullscreen) {
            video.msRequestFullscreen();
          }
          video.play();
        })
        .catch(onError); // onError is executed if the asynchronous load fails.
    }
  }, [playVideo]);

  return (
    <div className={cssClassName} ref={videoContainer}>
      <video
        className="shaka-video"
        autoPlay
        ref={videoComponent}
        poster={poster}
      />
    </div>
  );
}

export default VideoPlayer;
