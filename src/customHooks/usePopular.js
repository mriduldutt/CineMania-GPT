import { API_OPTIONS, TMDB_API_OPTIONS, nowPlayingMovies, topRated } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopular } from "../utils/moviesReduxSlice";    
import { useEffect } from "react";
    
const usePopular=()=>{

    const dispatch=useDispatch();

    const getTopRated=async ()=>{
        const data=await fetch(topRated,TMDB_API_OPTIONS);
        const json=await data.json();
        dispatch(addPopular(json.results));
    }
    
    useEffect(()=>{
        getTopRated();
    },[])

}

export default usePopular;