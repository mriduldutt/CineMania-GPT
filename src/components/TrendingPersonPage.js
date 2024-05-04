import React, { useEffect, useState } from "react";
import Header from "./Header";
import { API_OPTIONS, Get_Trending_Personalities_URL, TMDB_API_OPTIONS} from "../utils/constants";
import Loader from "./Loader";
import { Link } from "react-router-dom";
import ItemCard from "./ItemCard";
import Footer from "./Footer";

const TrendingPersonPage = () => {
    const [trendingPeople, setTrendingPeople] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);
  
    const getTrendingPeople = async () => {
      if (totalPages && totalPages === page) return;
      const data = await fetch(
        Get_Trending_Personalities_URL +
          page,
        TMDB_API_OPTIONS
      );
      const json = await data.json();
      setTotalPages(json.total_pages);
      const filter = await json?.results.filter((data) => {
        return data.profile_path !== null;
      });
      const list = trendingPeople;
      const newList = await list.concat(filter);
      setTrendingPeople(newList);
    };
  
    useEffect(() => {
      getTrendingPeople();
    }, [page]);
    return (
      <div className="h-screen text-white bg-stone-900">
        <Header />
        <div className="pt-24 bg-stone-900">
          {trendingPeople?.length > 0 ? (
            <div className="w-full mx-auto bg-stone-900 p-10 pt-20">
              <p className=" text-2xl font-semibold">Trending Personalities</p>
              <div className="flex mx-auto mt-4 p-2 justify-between flex-wrap">
                {trendingPeople?.map((person) => {
                  return (
                    <Link to={"/person/" + person.id} key={person.id}>
                      <ItemCard
                        title={person.original_name}
                        poster={person.profile_path}
                      />
                    </Link>
                  );
                })}
              </div>
              <div className="w-full flex justify-center">
                <button
                  onClick={() => setPage(page + 1)}
                  className="bg-red-700 hover:bg-red-800 rounded-lg text-sm p-2"
                >
                  View More
                </button>
              </div>
            </div>
          ) : (
            <Loader />
          )}
        </div>
        <Footer/>
      </div>
    );
  
}

export default TrendingPersonPage