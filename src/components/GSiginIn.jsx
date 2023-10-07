import React,{useEffect} from "react";
import { useGSignIn } from "../hooks/useGoogleSignin";
import Signin from "./Signin";
import LeaderboardNoAuth from "./LeaderboardsNoAuth";
import Typewriter from "typewriter-effect";
import AOS from 'aos';
import 'aos/dist/aos.css';

const GSiginIn = () => {
    useEffect(() => {
        AOS.init();
      }, [])
  const { login, logined, isPending } = useGSignIn();
  return (
    <div className="body h-screen">
      {logined ? (
        <div>
          <Signin />
        </div>
      ) : (
        <div className="grid grid-cols-2 gap-1 bg-black max-lg:grid-cols-1">
          <div className=" h-screen  flex items-center justify-center grid grid-row-2 ">
            <div className=" font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent  text-6xl max-md:text-5xl">
              <Typewriter
              className=" "
                options={{
                  strings: ["HACKTOBER FEST"],
                  autoStart: true,
                  loop: true,
                }}
              /><br/>
            </div>
           
            <div>
            <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-lg" onClick={login}>
              {!isPending ? "Sign In with Google" : "Loading...."}
            </button>
            </div>
          </div>
          <div className="h-screen  flex items-center justify-center mx-10" data-aos="zoom-in" data-aos-duration="3000">
            <LeaderboardNoAuth />
          </div>
        </div>
      )}
    </div>
  );
};

export default GSiginIn;
