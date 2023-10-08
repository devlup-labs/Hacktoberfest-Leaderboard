import React from "react";
import { useUserList } from "../hooks/useUserList";

const LeaderboardNoAuth = () => {
  const { users, isLoading } = useUserList();

  return (
    <div>
      <h1 className="text-white items-center text-center text-3xl my-5 font-mono">
        LEADERBOARD
      </h1>

      <div className=" ">
        <div className="overflow-auto rounded-lg shadow">
          {isLoading ? (
            <p className="p-4 text-center text-white">Loading...</p>
          ) : (
            <>
              <div className=" max-[587px]:hidden  ">
                <table className="w-full">
                  <thead className="bg-gray-50 border-b-2 border-gray-200">
                    <tr>
                      <th
                        scope="col"
                        className="p-3 text-sm  font-semibold tracking-wide text-left uppercase"
                      >
                        Username
                      </th>
                      <th
                        scope="col"
                        className="p-3 text-sm  font-semibold tracking-wide text-left uppercase"
                      >
                        Contributions
                      </th>
                      <th
                        scope="col"
                        className="p-3 text-sm  font-semibold tracking-wide text-left uppercase"
                      >
                        Accepted PRs
                      </th>
                      <th
                        scope="col"
                        className="p-3 text-sm  font-semibold tracking-wide text-left uppercase"
                      >
                        Last Updated
                      </th>
                    </tr>
                  </thead>
                  <tbody className=" divide-y divide-gray-100   ">
                    {users.map((user) => (
                      <tr
                        key={user.username}
                        className="hover:bg-slate-300 bg-white"
                      >
                        <td className="p-3 text-sm text-gray-700  whitespace-nowrap">
                          {user.username}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {" "}
                          {user.HacktoberFestContributions}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {" "}
                          {user.AcceptedHacktoberFestPRs}
                        </td>
                        <td className="p-3 text-sm text-gray-700 whitespace-nowrap">
                          {user.updatedAt}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="min-[587px]:hidden grid grid-cols-1 gap-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="flex items-center space-x-2 text-sm">
                    <div className="bg-green-200 rounded-lg p-1">user</div>
                    <div className="bg-red-200 rounded-lg p-1">Contributions</div>
                    <div className="bg-orange-200 rounded-lg p-1">Accepted Hacktober</div>
                    <div className="bg-purple-200 rounded-lg p-1"> Last Updated</div>
                  </div>
                </div>
                {users.map((user) => (
                  <div
                    className="bg-white p-4 rounded-lg shadow"
                    key={user.username}
                  >
                    <div className="flex items-center space-x-2 text-sm " >
                      <div className="bg-green-200 rounded-lg p-1">{user.username}</div>
                      <div className="bg-red-200 rounded-lg p-1"> {user.HacktoberFestContributions}</div>
                      <div className="bg-orange-200 rounded-lg p-1"> {user.AcceptedHacktoberFestPRs}</div>
                      <div className="bg-purple-200 rounded-lg p-1">{user.updatedAt}</div>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardNoAuth;
