import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../customHooks/useNowPlayingMovies";
import VideoContainer from "./VideoContainer";
import RecomendationMovieContainer from "./RecomendationMovieContainer";

import { useSelector } from "react-redux";
import GPTSearhPage from "./GPTSearhPage";
import useTrailer from "../customHooks/useTrailer";
import useTopRated from "../customHooks/useTopRated";
import usePopular from "../customHooks/usePopular";
import useUpComing from "../customHooks/useUpcoming";
import Footer from "./Footer";

const Browse = () => {
  useNowPlayingMovies();
  usePopular();
  useTopRated();
  useUpComing();
  return (
    <div className="bg-black">
      <Header />
      <VideoContainer />
      <RecomendationMovieContainer />
      <Footer/>
    </div>
  );
};

export default Browse;

// const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);
{/* <div className="">
<Header />
{showGPTSearch ? (
  <GPTSearhPage />
) : (
  <>
    <MainBackgroundContainer />
    <RecomendationMovieContainer />
  </>
)}
</div> */}
