import { useState } from 'react';
import Youtube from 'react-youtube';

const VideoPlayer = ({ youtubeId }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleButton = () => {
    setIsOpen((prevState) => !prevState);
  };

  const option = {
    width: '300',
    height: '250',
  };

  const Player = () => {
    return (
      <div className="fixed bottom-2 right-2">
        <button className="text-primary float-right bg-secondary px-3 mb-1 hover:bg-accent transition-all" onClick={handleButton}>
          X
        </button>
        <Youtube videoId={youtubeId} onReady={(event) => event.target.pauseVideo()} opts={option} onError={() => alert('Trailer cannot play')}/>
      </div>
    );
  };

  const ButtonOpenPlayer = () => {
    return (
      <button onClick={handleButton} className="rounded fixed bottom-5 right-5 p-1 w-32 bg-primary text-dark hover:bg-accent transition-all font-semibold shadow-xl">
        Tonton Trailer
      </button>
    );
  };

  return isOpen ? <Player /> : <ButtonOpenPlayer />;
};

export default VideoPlayer;
