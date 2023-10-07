import React from "react";
import { useGSignIn } from "../hooks/useGoogleSignin";
import Signin from "./Signin";
import Typewriter from 'typewriter-effect';

const GSiginIn = () => {
  const { login, logined, isPending } = useGSignIn();
  return (
    <div className="bg-black h-screen text-center justify-center  flex items-center ">
      {logined ? (
        <div>
          <Signin />
        </div>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-40 ">
            <h1 className="text-white text-6xl font-medium  ">
              HACKTOBER <div className="text-left">FEST</div>{" "}
            </h1>
            <button
              className="bg-blue-600 text-white hover:text-blue-600 hover:bg-white mx-auto text-cneter mt-[100px] flex justify-center items-center p-4 border border-black rounded-md"
              onClick={login}
            >
              {!isPending ? "Sign In with Google" : "Loading...."}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default GSiginIn;
