/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Get_Movie_Info_Url1, Get_Movie_Credits_Url, Get_Person_Info_Url2, TMDB_API_OPTIONS } from "../utils/constants";

const usePersonInfo = (personId,gender) => {
  
  const [personMovies,setPersonMovies]=useState(null);
  const [castsBio,setCastsBio]=useState(null);

  const getPersonMoviesInfo = async () => {
    const data = await fetch('https://api.themoviedb.org/3/person/' + personId +'/movie_credits', TMDB_API_OPTIONS);
    const json = await data.json();
    setPersonMovies(json.cast);
  };

    const getCredits=async ()=>{
      const data =await fetch('https://api.themoviedb.org/3/person/ '+ personId + '?append_to_response=+' + gender +'&language=en-US',TMDB_API_OPTIONS);
      const json=await data.json();
      setCastsBio(json);
    }

  useEffect(() => {
    getPersonMoviesInfo();
    getCredits();
  }, []);



  return {
    personMovies: personMovies,
    castsBio : castsBio
  }


}
export default usePersonInfo
