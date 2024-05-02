import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/moviesReduxSlice";
import { useEffect } from "react";
import { TMDB_API_OPTIONS, nowPlayingMovies_URL} from "../utils/constants";


const useNowPlayingMovies = async () => {
  
  const nowPlayingMovies = useSelector((store)=>store.movies?.nowPlayingMovies);
  

  // Fetch data from TMDB API and update Redux Store
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data=await fetch(nowPlayingMovies_URL,TMDB_API_OPTIONS);
     const json = await data.json();
     dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    // if(!nowPlayingMovies) getNowPlayingMovies();
    !nowPlayingMovies && getNowPlayingMovies();
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  },[]);

}


export default useNowPlayingMovies;