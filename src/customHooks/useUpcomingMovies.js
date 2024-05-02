import { TMDB_API_OPTIONS,upComing_URL } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesReduxSlice";    
import { useEffect } from "react";
    
const useUpComingMovies=()=>{

    const dispatch=useDispatch();

    const upComing = useSelector((store)=>store.movies?.upComingMovies);

    const getUpComing=async ()=>{
        const data=await fetch(upComing_URL,TMDB_API_OPTIONS);
        const json=await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    
    useEffect(()=>{
        !upComing&&getUpComing();
    },[])

}

export default useUpComingMovies;