import React, { useRef } from "react";
import lang from "../utils/LanguageConstant";
import { useSelector } from "react-redux";
import openai from "../utils/openai";

const GPTSearchBar = () => {
  const langKey  = useSelector((store)=>store.config.lang)
  const searchText = useRef(null);

  const handleSearch = async (e) => {
    e.preventDefault();
    const searchData = searchText.current.value;
    //Make an API call to GPT API & get Movie Results
     
    const gptQuery ="Act as a movie recommendation System and suggest some movies for the query " + searchData + ". Only Give 5 movie recommendations, comma seprated like the example result given added . Example Result : The Godfather, The Godfather: Part II, The Dark Knight, 12 Angry Men, Schindler's List, Don , Koi Mil Gaya";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    }); 
    console.log(gptResults.choices);  
  }


  return (
    <div>

      <div className="w-full pt-40 text-white">
        <form className="bg-black w-11/12 md:w-8/12 mx-auto border rounded-md"
         onSubmit={(e)=>e.preventDefault()}>
          <input
            type="text" ref={searchText}
            className="w-10/12 md:w-9/12 p-3 text-sm md:text-base bg-stone-800  border-b-0"
            placeholder={lang[langKey].gptSearchPlaceholder}
          />
          <button onClick={handleSearch} className="bg-red-600 w-2/12 md:w-3/12 p-3 border text-sm md:text-base font-semibold rounded">
            {lang[langKey].search}
          </button>
        </form>
      </div>
    </div>
  );
};

export default GPTSearchBar;
