import React from "react";
import "../../App.css";
import "./OdooVideo.css";
import YouTube from "react-youtube";

class VideoOdoo extends React.Component {
  render() {
    const opts = {
      height: "390",
      width: "640",
      playerVars: {
        autoplay: 1,
      },
    };

    return (
      <YouTube
        containerClassName={"ytvideo"}
        videoId="pSZaXjFrgBE"
        opts={opts}
        onReady={this._onReady}
      />
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.playVideo();
  }
}

export default VideoOdoo;
