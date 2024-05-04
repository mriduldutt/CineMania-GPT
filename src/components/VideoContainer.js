import React from 'react';
import VideoTitle from './VideoTitle';

import VideoBackground from './VideoBackground';
import Loader from "./Loader";
import { useSelector } from 'react-redux';

const VideoContainer = () => {
    

  const movies=useSelector((store)=>store.movies?.nowPlayingMovies);
  if(!movies) return (<Loader/>);

  const {original_title,id,overview,backdrop_path}=movies[0];
  console.log(original_title);

  return( 
    <div className="bg-stone-900 ">
        <VideoTitle title={original_title} overview={overview}/>
        <VideoBackground movieId={id} backgroundImage={backdrop_path}/>
    </div>
  )
}

export default VideoContainer
