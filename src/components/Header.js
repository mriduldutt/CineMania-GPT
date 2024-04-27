import React, { useEffect } from 'react';
import { onAuthStateChanged,signOut } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from '../utils/userReduxSlice';
import { useNavigate } from 'react-router-dom';

const Header = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store)=>store.user);

  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/login");
    }).catch((error) => {
      // An error happened.
      navigate("/error");
    });
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
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
          navigate("/login");
        }
      }
    })
  },[]);


  return (
    <div className='flex justify-between items-center absolute w-screen px-10 py-2 bg-gradient-to-b from-black z-10'>
      <img className='w-48'
       src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" 
      alt="netflix logo"/>
      
      {user &&      
       <div className='flex items-center space-x-3 text-white'>
        <img src="https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABTZ2zlLdBVC05fsd2YQAR43J6vB1NAUBOOrxt7oaFATxMhtdzlNZ846H3D8TZzooe2-FT853YVYs8p001KVFYopWi4D4NXM.png?r=229"
         alt="usericons" />
        <button onClick={handleSignOut} className='text-white text-lg font-semibold   hover:underline '> Sign out</button>
      </div> }

    </div>
  )
}

export default Header
