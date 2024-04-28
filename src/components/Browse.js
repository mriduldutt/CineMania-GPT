import React, { useEffect } from 'react'
import Header from './Header'
import { TMDB_API_OPTIONS } from '../utils/constants';
import { useDispatch } from 'react-redux';
import { addNowPlayingMovies } from '../utils/moviesReduxSlice';

const Browse = () => {

  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', TMDB_API_OPTIONS);
     const json = await data.json();
     console.log(json.results);
     dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  },[]);

  return (
    <div>
      <Header />
    </div>
  )
}

export default Browse
