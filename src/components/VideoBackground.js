import React from "react";
import Loader from "./Loader";
import {useSelector } from "react-redux";
import useTrailerMovie from "../customHooks/useTrailerMovie";


const VideoBackground = (props) => {
 
  const trailerVideo=useSelector(store=>store?.movies?.trailerVideo);
  useTrailerMovie(props);
    
    
  return (
      <>
      {trailerVideo?.key ? (
        <div className="relative w-[100vw] h-[100vh] overflow-hidden">
          {/* Fullscreen Video as Background */}
          <iframe
            className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none z-0"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&loop=1&autoplay=1&mute=1&playlist=${trailerVideo?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      ) : (
        <Loader />
      )}
    </>
  )
};

export default VideoBackground;






