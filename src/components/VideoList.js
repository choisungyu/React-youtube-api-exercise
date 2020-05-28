import React from "react";
import VideoListEntry from "./VideoListEntry";

// 실제 API를 쓰게 되면 이 fakeData는 더이상 import 하지 않아야 합니다.
import { fakeData } from "./__test__/fakeData";
console.log(fakeData);

/*https://ko.reactjs.org/docs/forms.html
Key는 React가 어떤 항목을 변경, 추가 또는 삭제할지 식별하는 것을 돕습니다. 
key는 엘리먼트에 안정적인 고유성을 부여하기 위해 배열 내부의 엘리먼트에 지정해야 합니다.
Key를 선택하는 가장 좋은 방법은 리스트의 다른 항목들 사이에서 해당 항목을 고유하게 식별할 수 있는 문자열을 사용하는 것입니다.
대부분의 경우 데이터의 ID를 key로 사용합니다.
*/
// app -> videoList : props
const VideoList = () => (
  <div className="video-list media">
    {fakeData.map((
      video // 묶는 거 조심  { 이거 아님!
    ) => (
      <VideoListEntry
        // id 를 key 로 추출 해야 함,
        key={video.id.videoId}
        video={video}
        // 이거는 app 에서 만든 videoClick 메소드
        // videoClick={props.videoClick}
        title={video.snippet.title}
        src={video.snippet.thumbnails.default.url}
        description={video.snippet.description}
      />
    ))}
  </div>
);

export default VideoList;
