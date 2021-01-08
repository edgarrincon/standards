import React from "react";
import "../../App.css";
import "./BgVideo.css";
import BgVideo from "./Bgvideo.mp4";

function Video() {
  return (
    <div class="homepage-video">
      <video src={BgVideo} autoPlay loop muted />
      <div class="text-over-video">
        <h1>Standards Apps</h1>
        <p> Web & Software Development</p>
      </div>
    </div>
  );
}

export default Video;
