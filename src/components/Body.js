import React from "react";
import Login from "./Login";
import Browse from "./Browse";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { RouterProvider } from "react-router-dom";

const Body = () => {
  //   const appRouter = createBrowserRouter([
  //     {
  //         path:"/",
  //         element: <Login/>
  //     },
  //     {
  //         path:"/browse",
  //         element: <Browse/>
  //     }
  //   ]);

  // const AppLayout = () => {
  //   return (
  //       <div className="app">
  //         <Login />
  //         <Outlet />
  //       </div>
  //   );
  // };
  

  const appRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse/>} />
      </Route>
    )
  );



  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
