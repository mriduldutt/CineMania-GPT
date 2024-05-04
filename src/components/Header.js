import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userReduxSlice";
import { Link, useNavigate } from "react-router-dom";
import { LOGO, NAV_CROSS_IMG_URL, NAV_IMG_URL, Supported_Languages, USER_PROFILE } from "../utils/constants";
import { toggleGPTSearchView } from "../utils/gptreduxslice";
import { changeLanguage } from "../utils/configReduxSlice";
import toast from "react-hot-toast";



const Header = () => {
  const [showLinks,setShowLinks]=useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGPTSearch = useSelector((store) => store.gpt?.showGPTSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // navigate("/login");
        toast(user.displayName +" is logged out")
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed IN/UP, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { uid, email, displayName} = user;
        dispatch(addUser(
          { uid :uid, 
            email:email, 
            displayName:displayName}
        ));

        if (window.location.pathname === "/") {
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        if (window.location.pathname !== "/") {
          navigate("/");
        }
      }

      //cleaning of code : unsubscribe Component unmount
      return () => unsubscribe();
    });
  }, []);

  // const handleGPTSearchClick = () => {
  //   // Toggle the GPT search Component
  //   dispatch(toggleGPTSearchView());
  // };

  // const handleLangChange = (event) => {
  //   const selectedLang = event.target.value;
  //   const selectedLangObject = Supported_Languages.find(
  //     (lang) => lang.identifier === selectedLang
  //   );
  //   if (selectedLangObject) {
  //     localStorage.setItem("lang", selectedLangObject.identifier);
  //     // window.location.reload();
  //   }
  //   dispatch(changeLanguage(event.target.value));
  // };

  return (
    <>
<div className="absolute z-20 bg-black p-2 py-3 opacity-90 shadow-md flex justify-between w-full">
      <div className=" text-red-600 font-sans text-4xl p-4 ml-4 font-bold">
      <img className="w-20 mx-auto md:mx-0" src={LOGO} alt="netflix logo" />
      </div>
        {user && (<><div className="hidden xl:flex xl:flex-row">
          <Link to={"/browse"}>
          <button
            className="text-red-600  text-lg font-bold  p-5 mr-5"
          >Home
          </button>
          </Link>
          <Link to={"/tvShow"}>
        <button
            className="text-white hover:text-red-600 text-lg font-bold  p-5 mr-5"
          >Tv Shows
          </button>
        </Link>
        <Link to={"/movies"}>
        <button
            className="text-white hover:underline text-lg font-bold  p-5 mr-5"
          >Movies
          </button>
        </Link>
        <Link to={"/search"}>
      <button
            className="text-white hover:text-red-600 text-green text-lg font-bold  p-5 mr-5"
          >Search 🔎
          </button></Link>
 
        <Link to={"/person"}>
        <button
            className="text-white hover:text-red-600 text-lg font-bold  p-5 mr-5"
          >Person
          </button>
        </Link>
        <Link to={"/developerInfo"}>
        <button
            className="text-white hover:text-red-600 text-lg font-bold  p-5 mr-5"
          >Developer
          </button>
        </Link>

          <button
            className="text-white hover:text-red-600 text-lg font-bold  p-5 mr-5"
            onClick={handleSignOut}
          >
            Log out
          </button>
          </div>
          <div onClick={()=>setShowLinks(!showLinks)} className="text-red text-lg font-bold  p-5 mr-5 flex xl:hidden">{!showLinks ?(
            <img className=" h-6" src={NAV_IMG_URL} alt="Nav-Bar"/>
          ):<img className=" h-6" src={NAV_CROSS_IMG_URL} alt="Nav-Bar-Cross"/>}
          </div>
          </>
        )}
    </div>{user && (<>
    {showLinks ? (
      <div className="flex flex-col absolute w-screen z-10  bg-stone-800  pt-24 justify-center mx-auto xl:hidden">
        <Link to={"/browse"}>
        <button
      className="text-white hover:text-red-600 text-lg font-bold p-5 w-full mx-auto "
    >Home
    </button>
        </Link>
        <Link to={"/tvShow"}>
  <button
      className="text-white hover:text-red-600 text-lg font-bold  p-5 w-full mx-auto "
    >Tv Shows
    </button>
  </Link>
        <Link to={"/movies"}>
  <button
      className="text-white hover:text-red-600 text-lg font-bold p-5 w-full mx-auto "
    >Movies
    </button>
  </Link>
  <Link to={"/search"}>
<button
      className="text-white hover:text-red-600 text-lg font-bold  p-5 mx-auto w-full "
    >Search
    </button></Link>

  <Link to={"/person"}>
  <button
      className="text-white hover:text-red-600 text-lg font-bold  p-5 w-full mx-auto "
    >Person
    </button>
  </Link>
  <Link to={"/developerInfo"}>
  <button
      className="text-white hover:text-red-600 text-lg font-bold  p-5 mx-auto w-full "
    >Developer
    </button>
  </Link>
 
    <button
      className="text-white hover:text-red-600 text-lg font-bold  p-5 mx-auto w-full"
      onClick={handleSignOut}
    >
      Sign-Out
    </button>
      </div>
    ):""}
    </>)}
    </>
  );
};

export default Header;




{/* <div className="flex justify-between items-center absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10 flex-col md:flex-row">
<img className="w-48 mx-auto md:mx-0" src={LOGO} alt="netflix logo" />

{user && (
  <div className="flex items-center space-x-3 text-white  hover:cursor-pointer mr-5 mt-3">
    {showGPTSearch && (
      <select
        className="text-sm m-2 p-2 bg-gray-900 text-white"
        onChange={handleLangChange}
      >
        {Supported_Languages.map((lang) => (
          <option key={lang.identifier} value={lang.identifier}>
            {lang.name}
          </option>
        ))}
      </select>
    )}

    <button
      className="text-black text-lg text-center font-bold bg-orange-100 rounded-lg  p-3 mx-8 my-2 hover:bg-orange-200"
      onClick={handleGPTSearchClick}
    >
      {showGPTSearch ? "Home":"Search 🔎"}
    </button>

    <img src={USER_PROFILE} alt="usericons" />
    <button
      onClick={handleSignOut}
      className="text-white text-lg font-semibold   hover:underline "
    >
      {" "}
      Sign out
    </button>
  </div>
)}
</div> */}