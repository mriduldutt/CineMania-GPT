import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  createBrowserRouter,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Error from "./Error";
import MovieInfo from "./MovieInfo";
import GPTSearhPage from "./GPTSearhPage";
import PersonPage from "./PersonPage";
import TvPage from "./TvPage";
import TvShowPage from "./TvShowPage";
import TrendingPersonPage from "./TrendingPersonPage";
import MovieList from "./MovieList";

const Body = () => {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
      errorElement:<Error/>
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path:"/movieInfo/:movieId",
      element:<MovieInfo/>
    },
    {
      path:"/search",
      element:<GPTSearhPage/>
    },
    // {
    //   path:"/person/:personId",
    //   element:<PersonPage/>
    // },
    // {
    //   path:"/tvShow/:showId",
    //   element:<TvPage/>
    // },
    {
      path:"/movies",
      element:<MovieList/>
    },{
      path:"/tvShow",
      element:<TvShowPage/>
    },{
      path:"/person",
      element:<TrendingPersonPage/>
    },
    // {
    //   path:"/developerInfo",
    //   element:<TvShowPage/>
    // }
  ]);
  return (
    <div>
      <RouterProvider router={appRouter}></RouterProvider>
    </div>
  );
};

export default Body;
