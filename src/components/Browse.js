import React from 'react';
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainBackgroundContainer from './MainBackgroundContainer';
import RecomendationMovieContainer from './RecomendationMovieContainer';

const Browse = () => {

  useNowPlayingMovies();
  return (
    <div>
      <Header />
      <MainBackgroundContainer/>
      {/* <RecomendationMovieContainer/> */}
     
      {/* 
       Main Video Conatiner
         - Movie BG Video
         - Movie Details/Title
      
       Secondary Video Conatiner
         - Movie List * n
           - Movie Cards * n 
MainBackgroundContainer             
      */}
    </div>
  )
}

export default Browse
