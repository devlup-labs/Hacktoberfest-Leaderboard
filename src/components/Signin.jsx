import React, { useState } from "react";
import { useSignIn } from "../hooks/useSignIn";
import Leaderboard from "./Leaderboard";
import LeaderboardNoAuth from "./LeaderboardsNoAuth";
import Typewriter from "typewriter-effect";

const Signin = () => {
  let { login, isPending, logined, users, refreshData } = useSignIn()
  const [refreshMessage, setRefreshMessage] = useState('');
  const handleRefresh = async () => {
    try {
      const result = await refreshData();
      setRefreshMessage(result);
    } catch (err) {
      console.error("Error during refresh:", err);
      setRefreshMessage("Failed to refresh data.");
    }
  }
  return (
    <div>
      {logined ? (
        <div className="">
          <Leaderboard status={logined} >
            {users}
          </Leaderboard>
          <div className="flex py-2 items-center justify-center">
            <button onClick={handleRefresh} className='text-white bg-[#3b82f6] p-2 rounded-lg'>
              Refresh
            </button>
          </div>
          {refreshMessage !== '' && (
            <div className="text-center text-gray-500 my-2">
              {refreshMessage}
            </div>
          )}
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center">
          <div className="font-bold text-[#3b82f6]  text-transparent text-4xl text-center">
            <Typewriter
              options={{
                strings: ["HACKTOBER FEST"],
                autoStart: true,
                loop: true,
              }}
            />
          </div>
          <div className="mt-6 ">
            <button
              className="bg-[#3b82f6] text-sm p-2 rounded-lg"
              onClick={login}
            >
              {isPending ? "Loading....." : "Link Github"}
            </button>
          </div>
          {/* Table and Button */}
          <div className="mt-2 flex items-center justify-center">
            <div className="bg-white w-full max-w-3xl overflow-hidden">
              <LeaderboardNoAuth />
            </div>
          </div>
        </div>
      )}
    </div>

  );
};

export default Signin;
