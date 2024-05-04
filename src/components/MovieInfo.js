import React from "react";
import Header from "./Header";
import MovieInfoCard from "./MovieInfoCard";
import { useParams } from "react-router-dom";
import MoviesList from "./MovieList";
import useMovieInfo from "../customHooks/useMovieInfo";
import CastList from "./CastList";
import Footer from "./Footer";


const MovieInfo = () => {
  const { movieId } = useParams();

  const { movieInfo, recommendations,casts,trailer } = useMovieInfo(movieId);

  return (
    <div className="bg-stone-900">
      <Header />
      <MovieInfoCard movieInfo={movieInfo} trailer={trailer}/>
      <CastList casts={casts} title="Movie Casts"/>
      <MoviesList title="Recommendataions" movies={recommendations} />
      <Footer/>
    </div>
  );
};

export default MovieInfo;