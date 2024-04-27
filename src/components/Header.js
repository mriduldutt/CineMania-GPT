import React, { useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userReduxSlice';
import { useNavigate } from 'react-router-dom';
import { LOGO, USER_PROFILE } from '../utils/constants';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      // navigate("/login");
    }).catch((error) => {
      // An error happened.
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


  return (
    <div className='flex justify-between items-center absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-48'
       src={LOGO} 
      alt="netflix logo"/>
      
      {user &&      
       <div className='flex items-center space-x-3 text-white hover:cursor-pointer'>
        <img src={USER_PROFILE}
         alt="usericons" />
        <button onClick={handleSignOut} className='text-white text-lg font-semibold   hover:underline '> Sign out</button>
      </div> }

    </div>
  )
}

export default Header
