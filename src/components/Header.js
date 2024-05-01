import React, { useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userReduxSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, USER_PROFILE } from '../utils/constants';
import { toggleGPTSearchView} from '../utils/gptreduxslice';
const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // navigate("/login");
    }).catch((error) => {
      navigate("/error");
    });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
          // User is signed IN/UP
        const {uid,email, displayName,photoURL } = user;
        dispatch(addUser({uid,email, displayName,photoURL}));
        
        if(window.location.pathname==="/"){
          navigate("/browse");
        }
      } else {
        // User is signed out
        dispatch(removeUser());
        if(window.location.pathname!=="/"){
          navigate("/");
        }
      }

      //cleaning of code : unsubscribe Component unmount
      return () => unsubscribe();
    });

  },[]);


  const handleGPTSearchClick = () => {
    // Toggle the GPT search Component
    dispatch(toggleGPTSearchView());
  }


  return (
    <div className='flex justify-between items-center absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-48'
       src={LOGO} 
      alt="netflix logo"/>
      
      {user &&      
       <div className='flex items-center space-x-3 text-white  hover:cursor-pointer mr-5 mt-3'>
         <select className='text-black text-sm'>
          <option value="en">English</option>
          <option value="hi">Hindi</option>
          <option value="spanish">Spanish</option>
         </select>
        <button
            className="text-black text-lg text-center font-bold bg-orange-100 rounded-lg  p-3 mx-8 my-2 hover:bg-orange-200"
            onClick={handleGPTSearchClick}
          >Search 🔎
          </button>

        <img src={USER_PROFILE}
         alt="usericons" />
        <button onClick={handleSignOut} className='text-white text-lg font-semibold   hover:underline '> Sign out</button>
      </div> }

    </div>
  )
}

export default Header
