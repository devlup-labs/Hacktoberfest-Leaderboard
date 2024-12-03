import React, { useState } from "react";
import { useUserList } from "../hooks/useUserList";

const LeaderboardNoAuth = () => {
  const { users, isLoading } = useUserList();
  const itemsPerPage = 10;  
  const [currentPage, setCurrentPage] = useState(1);
  users.sort(
    (a, b) => b.AcceptedHacktoberFestPRs - a.AcceptedHacktoberFestPRs
  );
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage <= users.length ? startIndex + itemsPerPage : users.length;

  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <h1 className="pt-20 font-semibold text-center  text-[#3b82f6] text-4xl pt-10 pb-2">
        BugBounty Leaderboard
      </h1>
      <h3 className="text-xl font-semibold text-center pb-4 text-[#3b82f6]">Devlup Labs</h3>
      <div className="">
        <div className="">
          {isLoading ? (
            <p className="p-4 text-center text-white">Loading...</p>
          ) : (
            <>


       <div className="w-full px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-gray-800 rounded-lg overflow-x-auto">
        <table className="w-full divide-y divide-gray-700">
          <thead className="bg-gray-700">
            <tr>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden sm:table-cell">Username</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Contributions</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell">Accepted Contributions</th>
              <th className="px-4 sm:px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider hidden md:table-cell">Updated At</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-700">
            {users.map((user) => (
              <tr key={user.username} className="hover:bg-gray-700">
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300 hidden sm:table-cell">{user.username}</td>
                <td className="px-4 sm:px-6 py-4 text-sm font-medium text-blue-400">
                  <div className="flex flex-col">
                    <span className="sm:hidden text-xs text-gray-400 mb-1">Username: {user.username}</span>
                    <div className="font-medium">{user.HacktoberFestContributions}</div>
                  </div>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm text-gray-300 hidden md:table-cell">
                  <a 
                    href={user.ProjectLink} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="flex items-center text-blue-400"
                  >
                    {user.AcceptedHacktoberFestPRs}
                  </a>
                </td>
                <td className="px-4 sm:px-6 py-4 whitespace-nowrap text-sm hidden md:flex items-center">
                  <span className="text-white">{user.updatedAt}</span>
                </td>
                
                {/* Mobile View Additional Information */}
                <td className="px-4 sm:px-6 py-4 md:hidden">
                  <div className="flex flex-col text-xs text-gray-400 space-y-1">
                    <span>Accepted PRs: {user.AcceptedHacktoberFestPRs}</span>
                    <span>Updated: {user.updatedAt}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
              
              <div className="mt-4 flex flex-col items-center">
                <nav className="pagination flex justify-center">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => handlePageChange(index + 1)}
                      className={`${currentPage === index + 1
                        ? "bg-blue-500 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                        } px-3 py-2 rounded-md cursor-pointer mx-1`}
                    >
                      {index + 1}
                    </button>
                  ))}
                </nav>

                <div className="mt-2 text-sm text-center text-white">
                  Showing {startIndex + 1} to {endIndex} of {users.length}
                </div>
              </div>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default LeaderboardNoAuth;