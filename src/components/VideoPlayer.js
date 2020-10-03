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
      var manifestUri =
        "https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8";

      //Getting reference to video and video container on DOM
      const video = videoComponent.current;
      const currentVideoContainer = videoContainer.current;

      //Initialize shaka player and set the url features to HLS
      var player = new shaka.Player(video);
      shaka.media.ManifestParser.registerParserByExtension(
        "m3u8",
        shaka.hls.HlsParser
      );
      shaka.media.ManifestParser.registerParserByMime(
        "application/x-mpegURL",
        shaka.hls.HlsParser
      );
      //Setting UI configuration JSON object
      const uiConfig = {};

      uiConfig["addBigPlayButton"] = true; // barra de progreso
      //Configuring elements to be displayed on video player control panel
      uiConfig["controlPanelElements"] = ["mute", "fullscreen", "close"];
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
        })
        .catch(onError); // onError is executed if the asynchronous load fails.
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playVideo]);

  return (
    <div className={cssClassName} ref={videoContainer}>
      <video
        className="shaka-video"
        autoPlay
        width="225px"
        ref={videoComponent}
        poster={poster}
      />
    </div>
  );
}

export default VideoPlayer;
