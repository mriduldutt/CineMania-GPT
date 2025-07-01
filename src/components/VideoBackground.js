/* eslint-disable react/prop-types */
import React from "react";
import Loader from "./Loader";
import { useSelector } from "react-redux";
import useTrailerMovie from "../customHooks/useTrailerMovie";

const VideoBackground = (props) => {
   const {movieId} = props;
   useTrailerMovie({movieId});
  const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);


  return (
    <>
      {trailerVideo?.key ? (
        <div className="w-[100vw] h-[100vh]">
          <iframe
            className="w-screen top-0 left-0 w-full h-full object-cover pointer-events-none z-0 aspect-video"
            src={`https://www.youtube.com/embed/${trailerVideo?.key}?controls=0&loop=1&autoplay=1&mute=1&playlist=${trailerVideo?.key}`}
            title="YouTube video player"
            autoPlay
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          ></iframe>


        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default VideoBackground;
