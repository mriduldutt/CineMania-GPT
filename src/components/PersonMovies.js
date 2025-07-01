import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import Loader from './Loader';
import Footer from './Footer';
import ItemCard from './ItemCard';
import { NavLink } from 'react-router-dom';


const PersonMovies = () => {
    const personMovies = useSelector((state) => state.movies.nowPlayingMovies);

    const [page, setPage] = useState(1);
    return (
      <div className="h-screen text-white bg-stone-900 font-serif">
        
      <div className="pt-24 bg-stone-900">
        {personMovies?.length > 0 ? (
          <div className="w-full mx-auto bg-stone-900 p-10 pt-20">
            <p className=" text-3xl font-semibold text-red-300 mb-10 text-center"> Movies  </p>
            <div className="flex mx-auto mt-4 p-2 justify-between flex-wrap">
              {personMovies?.filter((movie) => movie.poster_path).map((movie) => {
                return (
                  <NavLink to={"/movieInfo/" + movie.id} key={movie.id}>
                    <ItemCard
                      title={movie.original_title}
                      poster={movie.poster_path}
                    />
                  </NavLink>
                );
              })}
            </div>
            <div className="w-full flex justify-center font-serif">
              <button
                onClick={() =>{
                  setPage(page + 1)
                } }
                className="bg-orange-700 hover:bg-orange-800 mt-10 rounded-lg text-sm p-2"
              >
                View More
              </button>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
      <Footer />
      </div>
    );
}


export default PersonMovies
