import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import MainBackgroundContainer from "./MainBackgroundContainer";
import RecomendationMovieContainer from "./RecomendationMovieContainer";
import usePopularMovies from "../customHooks/usePopularMovies";
import useTopRatedMovies from "../customHooks/useTopRatedMovies";
import useUpComingMovies from "../customHooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GPTSearhPage from "./GPTSearhPage";

const Browse = () => {
  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpComingMovies();
  return (
    <div className="">
      <Header />
      {showGPTSearch ? (
        <GPTSearhPage />
      ) : (
        <>
          <MainBackgroundContainer />
          <RecomendationMovieContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
