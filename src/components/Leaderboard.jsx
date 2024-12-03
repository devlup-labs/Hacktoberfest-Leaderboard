
import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Leaderboard = ({ children, status }) => {
  const names = children;
  names.sort(
    (a, b) => b.AcceptedHacktoberFestPRs - a.AcceptedHacktoberFestPRs
  );
  const itemsPerPage = 10;
  const [currentPage, setCurrentPage] = useState(1);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const visibleData = names.slice(startIndex, endIndex);

  const totalPages = Math.ceil(names.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="mx-auto w-[3/4]">
      {status ? (
        <div className="pt-20">
          <h1 className=" font-semibold text-center  text-[#3b82f6] text-4xl pt-10 pb-2">
            BugBounty Leaderboard
          </h1>
          <h3 className="text-xl font-semibold text-center pb-4 text-[#3b82f6]">Devlup Labs</h3>
         
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="bg-gray-800 rounded-lg overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-700">
                      <thead className="bg-gray-700">
                          <tr>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Username</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">Contributions</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"> Accepeted Contributions</th>
                              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-300 uppercase tracking-wider"> Updated At</th>
                          </tr>
                      </thead>
                    <tbody className="divide-y divide-gray-700">
                          {visibleData.map((issue) => (
                              <tr key={issue.username} className="hover:bg-gray-700">
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">{issue.username}</td>
                                  <td className="px-6 py-4 text-sm font-medium text-blue-400">
                                      <div>
                                          <div className="font-medium">{issue.HacktoberFestContributions}</div>
                                      </div>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-300">
                                      <a href={issue.ProjectLink} target="_blank" rel="noopener noreferrer" className="flex items-center text-blue-400">
                                          {issue.AcceptedHacktoberFestPRs}
                                      </a>
                                  </td>
                                  <td className="px-6 py-4 whitespace-nowrap text-sm flex items-center">
                                      <span className="text-white">{issue.updatedAt}</span>
                                  </td>
                                
                              </tr>
                          ))}
                      </tbody>
                  </table>
                </div>
          
          </div>

          <div className="mt-4 flex flex-col justify-center">
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
              Showing {startIndex + 1} to {endIndex} of {names.length}
            </div>
          </div>
        </div>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default Leaderboard;
