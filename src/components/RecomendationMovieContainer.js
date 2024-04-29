import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const RecomendationMovieContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);

  return (
    movies && (
      <div className=" w-full pt-8 bg-black z-20 ">
        <div className="-mt-40 pl-12 relative">
          <MovieList title={"Now Playing"} movies={movies} />
          <MovieList title={"Trending"} movies={movies} />
          <MovieList title={"Popular"} movies={movies} />
        </div>
      </div>
    )
  );
};

export default RecomendationMovieContainer;
