import { useDispatch, useSelector } from "react-redux";
import { addTrailer } from "../utils/moviesReduxSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";

const useTrailerMovie=(props)=>{
         const dispatch = useDispatch();

        // eslint-disable-next-line react/prop-types
        const {movieId}=props;

         const trailerVideo = useSelector((store) => store?.movies?.trailerVideo);


        const getMovieVideos= async()=>{
        const data= await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?",TMDB_API_OPTIONS);
        const json=await data?.json();
        

        const filterData=json?.results.filter((video)=>video.type==="Trailer");
        const trailer= filterData?.length? filterData[0]:json?.results[2];
        
        // console.log(trailer);
        dispatch(addTrailer(trailer));
    }
    useEffect(()=>{
        !trailerVideo &&
        getMovieVideos();
    },[movieId])
}

export default useTrailerMovie;