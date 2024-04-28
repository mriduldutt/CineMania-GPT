import React, { useEffect } from 'react'
import useTrailer from '../customHooks/useTrailer'
import { TMDB_API_OPTIONS } from '../utils/constants';

const MainVideoBackground = (props) => {
  
  const {id} = props;
  console.log(id);

  // fetch trailer
  const getMovieVideos = async() => {
    const data = await fetch('https://api.themoviedb.org/3/movie/' + id + '/videos?language=en-US', TMDB_API_OPTIONS);
    const json = await data.json();
    console.log(json);

    const filterData =json.results.filter((video) => video.type === "Trailer");

    const number = Math.floor(Math.random() * filterData.length);
    console.log(filterData[number]);
  }



  useEffect(() => {
    getMovieVideos();
  },[]);


  return (
    <div>
      <h1>Main Video</h1>
    </div>
  )
}

export default MainVideoBackground
