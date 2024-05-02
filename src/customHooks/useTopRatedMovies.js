import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/moviesReduxSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS, topRated_URL } from "../utils/constants";


const useTopRatedMovies = async () => {
  
  const topRated = useSelector((store)=>store.movies?.topRated);

  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
     const data = await fetch(topRated_URL,TMDB_API_OPTIONS);
     const json = await data.json();

     dispatch(addTopRatedMovies(json.results));
  };

  useEffect(() => {
    !topRated&&getTopRatedMovies();
  },[]);

}


export default useTopRatedMovies;
