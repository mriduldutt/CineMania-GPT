import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { TMDB_API_OPTIONS,Get_Movie_Info_Url1, Get_Movie_Videos_Url } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesReduxSlice';

const useMovieTrailer = (movieid) => {
    const dispatchEvent = useDispatch();

 
   const getMovieVideos = async () => {
    const data=await fetch(Get_Movie_Info_Url1+movieid+Get_Movie_Videos_Url,TMDB_API_OPTIONS);
       const json = await data.json();
       const filterData=json.results.filter((data)=>{
        return data.type="Trailer"
        })
       console.log(filterData);
       const trailer=filterData.length?filterData[0]:json.results[0];
       console.log(trailer);
       dispatchEvent(addTrailerVideo(trailer));
   }
  
   useEffect(() => {
       getMovieVideos();
   },[]);
  
}

export default useMovieTrailer
