import React, { useState, useEffect } from "react";
import Signout from "./Signout";
import AOS from "aos";
import "aos/dist/aos.css";

const Leaderboard = ({ children, status }) => {
  let position = -100;
  const names = children[1];
  names.sort(
    (a, b) => b.HacktoberFestContributions - a.HacktoberFestContributions
  );
  for (let index = 0; index < names.length; index++) {
    if (names[index].username === children[0]) {
      position = index + 1;
      break;
    }
  }
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
    <div>
      {status ? (
        // bg-gradient-to-r from-black via-50%-purple-500 to-purple-800
        <>
          <div className=" bg-black h-screen">
            <div
              className="  text-5xl mx-20 py-10  font-extrabold  text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%
          "
            >
              <p
                className="  inline-block h-20 font-extrabold  "
                data-aos="fade-right"
                data-aos-duration="500"
              >
                Hii{" "}
              </p>
              {"  "}
              <div
                className="inline-block uppercase"
                data-aos="fade-right"
                data-aos-duration="500"
              >
                {children[0]}
              </div>
            </div>

            <h1
              className="text-4xl font-bold text-center my-5 text-white h-20 "
              data-aos="fade-down-left"
              data-aos-duration="500"
            >
              Hacktoberfest Leaderboard
            </h1>
            <div className="flex flex-col justify-between  mx-auto hover:shadow-2xl">
              <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200">
                      <thead className="bg-violet-700 text-white text-2xl text-center">
                        <tr>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium  uppercase tracking-wider"
                          >
                            Name
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium  uppercase tracking-wider"
                          >
                            HacktoberFestContributions
                          </th>
                          <th
                            scope="col"
                            className="px-6 py-3 text-left  font-medium  uppercase tracking-wider"
                          >
                            AcceptedHacktoberFestPRs
                          </th>
                          {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Count
                                                </th> */}
                        </tr>
                      </thead>
                      <tbody className="bg-white divide-y divide-gray-200 text-center ">
                        {visibleData.map((item, index) => (
                          <tr
                            key={index}
                            className={
                              item.username === children[0]
                                ? "bg-fuchsia-800 text-2xl"
                                : " "
                            }
                          >
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.username}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.HacktoberFestContributions}
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              {item.AcceptedHacktoberFestPRs}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex justify-center">
              <nav className="pagination">
                {Array.from({ length: totalPages }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(index + 1)}
                    className={`${
                      currentPage === index + 1
                        ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
                        : "bg-white text-white hover:bg-gray-100"
                    } px-3 py-2 rounded-md cursor-pointer mx-1`}
                  >
                    {index + 1}
                  </button>
                ))}
              </nav>
            </div>
            <div className="text-transparent  bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
              <p className=" text-3xl">
                You are in the{"  "}
                <span className=" text-4xl text-red-600 font-semibold mx-auto text-center">
                  {position}
                </span>
                {"  "}
                position currently.
              </p>
            </div>
            <Signout />
          </div>
        </>
      ) : (
        <p>Signed Out</p>
      )}
    </div>
  );
};

export default Leaderboard;
