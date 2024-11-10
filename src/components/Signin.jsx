import React, { useState } from "react";
import { useSignIn } from "../hooks/useSignIn";
import Leaderboard from "./Leaderboard";
import LeaderboardNoAuth from "./LeaderboardsNoAuth";
import Signout from "./Signout";

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
        <div className="min-h-screen bg-gray-900">
          <Leaderboard status={logined} >
            {users}
          </Leaderboard>
          <div className="flex flex-row gap-4 py-2 items-center justify-center">
            <button onClick={handleRefresh} className='text-white bg-[#3b82f6] p-2 rounded-lg'>
              Refresh
            </button>
            <Signout />
          </div>
          {refreshMessage !== '' && (
            <div className="text-center text-gray-500 my-2">
              {refreshMessage}
            </div>
          )}
        </div>
      ) : (
        <div className="min-h-screen flex flex-col items-center bg-gray-900 justify-center">
            <div className="mt-2 flex flex-col items-center justify-center gap-4">
              <div className="w-full max-w-3xl overflow-hidden">
                <LeaderboardNoAuth />
              </div>
              <div className="flex flex-row justify-center items-center mb-4 gap-4">
                <p className="text-white">Want to be a part of this?</p>
                <button
                  className="bg-[#3b82f6] text-white text-sm p-2 flex rounded-lg justify-center items-center"
                  onClick={login}
                >
                  {isPending ? "Loading....." : "Link Github"}
                </button>
              </div>
            </div>
        </div>
      )}
    </div>

  );
};

export default Signin;
