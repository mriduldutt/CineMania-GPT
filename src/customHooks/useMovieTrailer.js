import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesReduxSlice';

const useMovieTrailer = (movieid) => {
    const dispatchEvent = useDispatch();
    // console.log("idi => " + movieid);
  
   //fetch trailer video && update redux store with trailer video
 
 
   const getMovieVideos = async () => {
       const data = await fetch(
          'https://api.themoviedb.org/3/movie/'+movieid+'/videos?language=en-US', 
          TMDB_API_OPTIONS
       );
       const json = await data.json();
       console.log(json);
  
       const filterData = json.results.filter(
           (video) => video.type === "Trailer"
       );
       console.log(filterData);
       const trailer = filterData.length ? filterData[0] : json.results[0];
       console.log(trailer);
       dispatchEvent(addTrailerVideo(trailer));
   }
  
   useEffect(() => {
       getMovieVideos();
   },[])
  
}

export default useMovieTrailer
