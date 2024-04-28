import React from 'react'
import { useSelector } from 'react-redux'
import MainVideoTitle from './MainVideoTitle';
import MainVideoBackground from './MainVideoBackground';

const MainBackgroundContainer = () => {
    
    
    const movies = useSelector((store)=>store.movies?.nowPlayingMovies);
    
    if(!movies) return ;

    const number = Math.floor(Math.random() * movies.length);
    // console.log(number);
    const {original_title,overview,id,} = movies[number];
    // console.log(firstMainMovie);
    return (
    <div>
      <MainVideoTitle original_title={original_title} overview={overview}/>
      <MainVideoBackground id = {id}/>

    </div>
  )
}

export default MainBackgroundContainer
