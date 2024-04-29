import React from "react";
import MovieCards from "./MovieCards";

const MovieList = (props) => {
  const { title, movies } = props;
  console.log(movies, title);
  return (
    <div className="px-6 py-2  text-white">
      <p className="py-1 m-2 text-2xl font-bold">{movies.length? title: ""}</p>
      <div className="flex overflow-x-scroll">

        <div className="flex">
          {movies?.map((movie, index) => (
            <MovieCards key={movie.id} posterPath={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
