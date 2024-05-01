import React from "react";
import { LOGIN_BACKGROUND } from "../utils/constants";
import lang from "../utils/LanguageConstant";

const GPTSearchBar = () => {
  return (
    <div>

      <div className="w-full pt-40 text-white">
        <form className="bg-black w-11/12 md:w-8/12 mx-auto border rounded-md">
          <input
            type="text"
            className="w-10/12 md:w-9/12 p-3 text-sm md:text-base bg-stone-800  border-b-0"
            placeholder="What would you like to watch ?  "
          />
          <button className="bg-red-600 w-2/12 md:w-3/12 p-3 border text-sm md:text-base font-semibold rounded">
            {lang.hi.search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
