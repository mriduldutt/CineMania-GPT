import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { TMDB_API_OPTIONS,Get_Movie_Info_Url1, Get_Movie_Videos_Url } from '../utils/constants';
import { addTrailerVideo } from '../utils/moviesReduxSlice';

const useMovieTrailer = (movieid) => {
    const dispatch = useDispatch();
   
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
 
    const getMovieVideos=async (movieId)=>{
        const data=await fetch(Get_Movie_Info_Url1+movieId+Get_Movie_Videos_Url,TMDB_API_OPTIONS);
        const json=await data.json();

        console.log(json.results);
        // const filterData=json.results.filter((data)=>{
        //     return data.type="Trailer"
        // })

        // const trailer=filterData.length?filterData[0]:json.results[0];
        // dispatch(addTrailerVideo(trailer));
    }
   useEffect(() => {
       !trailerVideo&&getMovieVideos();
   },[]);
  
}

export default useMovieTrailer
