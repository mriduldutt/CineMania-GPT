import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/moviesReduxSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS,popular } from "../utils/constants";


const usePopularMovies = async () => {
  
  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
     const data=await fetch(popular,TMDB_API_OPTIONS);
     const json = await data.json();
  
     dispatch(addPopularMovies(json.results));
  };

  useEffect(() => {
    getPopularMovies();
  },[]);

}


export default usePopularMovies;
