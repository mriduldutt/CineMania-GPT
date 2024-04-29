import { TMDB_API_OPTIONS, upComing } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/moviesReduxSlice";    
import { useEffect } from "react";
    
const useUpComingMovies=()=>{

    const dispatch=useDispatch();

    const getUpComing=async ()=>{
        const data=await fetch(upComing,TMDB_API_OPTIONS);
        const json=await data.json();
        dispatch(addUpcomingMovies(json.results));
    }
    
    useEffect(()=>{
        getUpComing();
    },[])

}

export default useUpComingMovies;