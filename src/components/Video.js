import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import Button from "@material-ui/core/Button";

const Video = () => {
  const [play, setPlay] = useState(false);

  const handlePlay = () => {
    setPlay(!play);
  };

  return (
    <div>
      <Button
        variant="contained"
        color={play ? `primary` : `secondary`}
        onClick={() => handlePlay()}
      >
        Music {play ? `Off` : `On`}
      </Button>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=9B-34oE5new"
        width="0px"
        height="0px"
        loop={true}
        playing={play}
      />
    </div>
  );
};

export default Video;

/* react-youtube 라이브러리
import YouTube from "react-youtube";

class Video extends React.Component {
  render() {
    const opts = {
      height: `600`,
      width: `600`,
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
        controls: 0,
        modestbranding: 1,
        playsinline: 0,
        rel: 1,
        start: 1,
      },
    };

    return (
      <div>
        <YouTube videoId="lAxgztbYDbs" opts={opts} onReady={this._onReady} />
        <iframe
          id="ytplayer"
          type="text/html"
          width="640"
          height="360"
          src="https://www.youtube.com/embed/M7lc1UVf-VE?autoplay=1&origin=http://example.com"
          frameborder="0"
        ></iframe>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    event.target.pauseVideo();
  }
}

export default Video;
*/
