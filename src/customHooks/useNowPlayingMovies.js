import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesReduxSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS } from "../utils/constants";


const useNowPlayingMovies = async () => {
  
  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
     const data = await fetch
         ('https://api.themoviedb.org/3/movie/now_playing?page=1', 
         TMDB_API_OPTIONS);
     const json = await data.json();
    //  console.log(json.results);
     dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  },[]);

}


export default useNowPlayingMovies;