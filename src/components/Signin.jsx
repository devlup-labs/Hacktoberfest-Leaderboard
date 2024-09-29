import React from "react";
import { useSignIn } from "../hooks/useSignIn";
import Leaderboard from "./Leaderboard";
import LeaderboardNoAuth from "./LeaderboardsNoAuth";
import Typewriter from "typewriter-effect";

const Signin = () => {
  let { login, isPending, logined, users, refreshData } = useSignIn()

  return (
    <div>
      {logined ? (
        <div className="">
          <div className="flex py-10 items-center justify-center">
            <button onClick={refreshData} className='text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2'>
              REFRESH
            </button>
          </div>
          <Leaderboard status={logined} >
            {users}
          </Leaderboard>
        </div>
      ) : (
        <div>
          <div className=" h-screen block w-2/5 absolute left-0 flex items-center justify-center flex flex-col max-xl:w-full max-xl:relative">
            <div className=" my-20 m-auto  font-bold bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% bg-clip-text text-transparent  text-6xl max-md:text-5xl max-[425px]:text-4xl">
              <Typewriter
                className=" "
                options={{
                  strings: ["HACKTOBER FEST"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <br />
            <div className="block">
              <button
                className="bg-gradient-to-r text-3xl max-[425px]:text-2xl from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-lg"
                onClick={login}
              >
                {isPending ? "Loading....." : "Link with Github"}
              </button>
            </div>
            <div className="top-24 relative hidden max-xl:block" >
              <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white"></div>
              <div class="h-0 w-0 border-x-8 border-x-transparent border-b-[16px] border-b-white opacity-50"></div>

            </div>
          </div>
          <div className=" max-xl:bg-custom-blue h-screen block w-3/5 absolute right-0 flex items-center justify-center max-xl:w-full max-xl:relative">
            <LeaderboardNoAuth />
          </div>
        </div>
      )}
    </div>

  );
};

export default Signin;
