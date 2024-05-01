import React from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";

const GPTSearchBar = () => {
  const langKey  = useSelector((store)=>store.config.lang)
  return (
    <div>

      <div className="w-full pt-40 text-white">
        <form className="bg-black w-11/12 md:w-8/12 mx-auto border rounded-md">
          <input
            type="text"
            className="w-10/12 md:w-9/12 p-3 text-sm md:text-base bg-stone-800  border-b-0"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button className="bg-red-600 w-2/12 md:w-3/12 p-3 border text-sm md:text-base font-semibold rounded">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
