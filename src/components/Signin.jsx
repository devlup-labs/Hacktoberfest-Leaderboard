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
                <div>
                    <Leaderboard status={logined} >
                        {users}
                    </Leaderboard>
                    <button onClick={refreshData} className='text-white bg-blue-400'>
                        Refresh
                    </button>
                </div>
            ) : <div className='flex flex-col gap-8 w-2/3 mx-auto'>
                <LeaderboardNoAuth />
                <button className="bg-blue-600 text-white hover:text-blue-600 hover:bg-white mx-auto text-cneter mt-[100px] flex justify-center items-center p-4 border border-black rounded-md" onClick={login} >
                    {isPending ? "Loading....." : "Login With Git hub"}
                </button>
            </div>}
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
              />
              <br />
            </div>

            <div>
              <button
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-lg"
                onClick={login}
              >
                {isPending ? "Loading....." : "Login With Git hub"}
              </button>
            </div>
          </div>
          <div className="h-screen  flex items-center justify-center">
            <LeaderboardNoAuth />
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
