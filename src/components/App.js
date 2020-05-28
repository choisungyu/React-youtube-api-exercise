import React from "react";
import Nav from "./Nav";
import VideoPlayer from "./VideoPlayer";
import VideoList from "./VideoList";

import { fakeData } from "./__test__/fakeData";

const App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      {/* videoPlayer 에 video 키를 줬으면 video 로 받아야 함. */}
      <VideoPlayer video={fakeData[0]} />
    </div>
    <div className="col-md-5">
      <VideoList video={fakeData} />
    </div>
  </div>
);

export default App;
