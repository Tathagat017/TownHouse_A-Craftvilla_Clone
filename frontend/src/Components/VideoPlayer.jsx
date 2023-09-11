import React from "react";
import ReactPlayer from "react-player/lazy";
import thumbnailImage from "../Assets/levis_deepika.jpg";

const VideoPlayerComponent = () => {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        margin: "auto",
        justifyContent: "center",
        padding: "1%",
        backgroundColor: "white",
        alignItems: "center",
        boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
      }}
    >
      <ReactPlayer
        width="100%"
        height="26rem"
        url="https://youtu.be/elAHWOZXfac?si=h_OtQbXX12n17sQV"
        loop={true}
        playing={true}
        // light={thumbnailImage}
      ></ReactPlayer>
    </div>
  );
};

export default VideoPlayerComponent;
