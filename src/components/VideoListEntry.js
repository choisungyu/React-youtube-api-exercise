import React from "react";

const VideoListEntry = props => (
  <div className="video-list-entry">
    <div className="media-left media-middle">
      <img className="media-object" src={props.src} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title">{props.title}</div>
      <div className="video-list-entry-detail">{props.description}</div>
    </div>
  </div>
);
//  {props.description}
export default VideoListEntry;
