import React, { useState, useRef } from 'react';
import { FaPlay } from 'react-icons/fa';

const VideoPreview = ({ videoSrc, className }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className={`relative w-full h-full ${className}`}>
      {/* Overlay with Play Button */}
      {!isPlaying && (
        <div
          className="absolute inset-0 flex items-center text-white justify-center bg-black bg-opacity-30 cursor-pointer z-10"
          onClick={handlePlay}
        >
       
          <FaPlay size={30} />
      
        </div>
      )}

      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        className="w-full h-full object-cover rounded-3xl"
        controls={isPlaying} // Show controls only when the video is playing
        onClick={(e) => e.stopPropagation()} // Prevent triggering play on overlay click
        onEnded={() => setIsPlaying(false)} // Reset to thumbnail state on video end
      />
    </div>
  );
};

export default VideoPreview;
