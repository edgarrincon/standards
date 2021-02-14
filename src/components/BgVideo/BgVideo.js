import React from "react";
import "../../App.css";
import "./BgVideo.css";
import BgVideo from "./Bgvideo.mp4";

function Video() {
  return (
    <div className="homepage-video">
      <video src={BgVideo} autoPlay loop muted />
      <div className="text-over-video">
        <h1>Standards Apps</h1>
        <p>Web Development and Software Applications</p>
      </div>
    </div>
  );
}

export default Video;
