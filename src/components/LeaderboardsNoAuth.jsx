import React from "react";
import { useUserList } from "../hooks/useUserList";

const LeaderboardNoAuth = () => {
  const { users, isLoading } = useUserList();

  return (
    <div className=" grid ">
      <h1 className="text-white items-center text-center text-3xl my-5 font-mono">
      LEADERBOARD
      </h1>

      <div>
        <div className="bg-white shadow-md rounded-lg">
          {isLoading ? (
            <p className="p-4 text-center">Loading...</p>
          ) : (
            <div className="flex flex-col justify-between w-full mx-auto ">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-gray-50">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Contributions
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Username
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Accepted PRs
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          >
                            Last Updated
                          </th>
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 bg-slate-200  ">
                        {users.map((user) => (
                          <tr key={user.username} 
                          className="hover:bg-slate-300"
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              {user.username}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {" "}
                              {user.HacktoberFestContributions}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {" "}
                              {user.AcceptedHacktoberFestPRs}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {user.updatedAt}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardNoAuth;
