import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTSuggestion from "./GPTSuggestion";
import { LOGIN_BACKGROUND } from "../utils/constants";

const GPTSearhPage = () => {
  return (
    <div>
      <div>
        <img
          className="fixed object-cover h-screen w-full  -z-10 opacity-85"
          src={LOGIN_BACKGROUND}
          alt="Login-Background Img"
        />
      </div>

      {/* GPT Search Bar / GPT Movie Suggestions */}
      <GPTSearchBar />
      <GPTSuggestion />
    </div>
  );
};

export default GPTSearhPage;
