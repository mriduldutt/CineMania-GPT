import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/moviesReduxSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS, popular_URL } from "../utils/constants";


const usePopularMovies = async () => {
  
  const popular = useSelector((store)=>store.movies?.popular);

  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
     const data=await fetch(popular_URL,TMDB_API_OPTIONS);
     const json = await data.json();
  
     dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    !popular&&getPopularMovies();
  },[]);

}


export default usePopularMovies;
