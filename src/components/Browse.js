import React from 'react';
import Header from './Header'
import useNowPlayingMovies from '../customHooks/useNowPlayingMovies';
import MainBackgroundContainer from './MainBackgroundContainer';
import RecomendationMovieContainer from './RecomendationMovieContainer';
import usePopularMovies from '../customHooks/usePopularMovies';
import useTopRatedMovies from '../customHooks/useTopRatedMovies';
import useUpComingMovies from '../customHooks/useUpcomingMovies';

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className='bg-black'>
      <Header />
      <MainBackgroundContainer/>
      <RecomendationMovieContainer/>
    </div>
  )
}

export default Browse;

