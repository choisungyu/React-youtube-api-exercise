import React from "react";

// App 에서 video 라는 키로 건내줬기 때문에 {video} 로 받음.
const VideoPlayer = ({ video }) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe
        className="embed-responsive-item"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
        allowFullScreen
      ></iframe>
    </div>
    <div className="video-player-details">
      {/* video 로title 과 description은 건내 받았는데, 클릭한 애로 바뀌어야 함. */}
      <h3>{video.snippet.title}</h3>
      <div>{video.snippet.description}</div>
    </div>
  </div>
);

export default VideoPlayer;
