import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesReduxSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS, topRated } from "../utils/constants";


const useTopRatedMovies = async () => {
  
  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
     const data = await fetch(topRated,TMDB_API_OPTIONS);
     const json = await data.json();

     dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  },[]);

}


export default useTopRatedMovies;
