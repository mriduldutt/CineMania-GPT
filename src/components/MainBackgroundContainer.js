import React from 'react'
import { useSelector } from 'react-redux'
import MainVideoTitle from './MainVideoTitle';
import VideoBackground from './VideoBackground';

const MainBackgroundContainer = () => {
    
    
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    
    if(!movies) return ;

    const number = Math.floor(Math.random() * movies.length);
    // console.log(number);

    const {original_title,overview,id} = movies[2];
    // console.log("id : => " + movies[0].id);


    return (
    <div>
      <MainVideoTitle original_title={original_title} overview={overview} />
      <VideoBackground movieId={id} />


    </div>
  )
}

export default MainBackgroundContainer
