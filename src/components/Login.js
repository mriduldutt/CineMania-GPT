import React, { useState, useRef } from "react";
import Header from "./Header";
import checkValidData from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errormsg, setErrormsg] = useState(null);

  
  const email = useRef(null);
  const password = useRef(null);
  const fullName = useRef(null);

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = (e) => {
    e.preventDefault();
    const message = checkValidData(
      email.current.value,
      password.current.value,
      fullName
    );
    setErrormsg(message);
    if (message) return;

    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorMessage);
        });
    } else {
      //Sign In Logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // ...
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          setErrormsg(errorMessage);
        });
    }
  };


  return (
    <div className="w-full">
      <Header />
      <div>
        <img
          className="fixed object-cover h-screen w-full  -z-10"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg"
          alt="Login-Background Img"
        />
      </div>

      {/* Forms */}
      <form
        className="w-8/12 md:w-5/12 xl:w-3/12 absolute mx-auto right-0 left-0 my-[20%] md:my-[13%] bg-black p-8 opacity-95 rounded-md text-white"
        onSubmit={(e) => e.preventDefault()}
      >
        <h1 className="text-3xl py-4 mb-4 font-bold">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={fullName}
            type="text"
            placeholder="Full Name"
            className="p-4 my-4 w-full bg-gray-700 hover:bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-4 my-4 w-full bg-gray-700 hover:bg-gray-770"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700 hover:bg-gray-770"
        />
        <p className="text-red-500 font-semibold text-lg py-2">{errormsg}</p>
        <button
          className="p-4 my-4 cursor-pointer bg-red-600 w-full hover:opacity-95"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p
          className="my-6 cursor-pointer  hover:text-zinc-300"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up"
            : "Already have an account? Sign In Now."}
        </p>

        {!isSignInForm && (
          <p className="py-1 text-red-400">
            <span className="font-bold">Note:</span> Password must contain at
            least one lowercase letter, an uppercase letter, a numeric digit or
            some special character and should be between 8 and 15 characters.
          </p>
        )}
      </form>
    </div>
  );
};

export default Login;
