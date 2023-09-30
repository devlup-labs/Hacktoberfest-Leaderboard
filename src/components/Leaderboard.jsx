import React, { useState } from 'react'
import Signout from './Signout'

const Leaderboard = ({ children, status }) => {
    let position = -100
    const names = children[1]
    names.sort((a, b) => b.HacktoberFestContributions - a.HacktoberFestContributions)
    for (let index = 0; index < names.length; index++) {
        if (names[index].username === children[0]) {
            position = index + 1
            break
        }
    }
    const itemsPerPage = 10
    const [currentPage, setCurrentPage] = useState(1)

    const startIndex = (currentPage - 1) * itemsPerPage
    const endIndex = startIndex + itemsPerPage
    const visibleData = names.slice(startIndex, endIndex)

    const totalPages = Math.ceil(names.length / itemsPerPage)

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage)
    }

    return (
        <div>
            {status ? (
                <>
                    <p>Hi</p>
                    {children[0]}
                    <h1 className="text-2xl font-bold text-center my-4 text-blue-700">Hacktoberfest Leaderboard</h1>
                    <div className="flex flex-col justify-between w-2/3 mx-auto">
                        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Name
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                HacktoberFestContributions
                                                </th>
                                                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                AcceptedHacktoberFestPRs
                                                </th>
                                                {/* <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Count
                                                </th> */}
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {
                                                visibleData.map((item, index) => (
                                                    <tr key={index} className={item.username === children[0] ? 'bg-slate-700' : ''}>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.username}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.HacktoberFestContributions}</td>
                                                        <td className="px-6 py-4 whitespace-nowrap">{item.AcceptedHacktoberFestPRs}</td>
                                                    </tr>
                                                ))
                                            }
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
                                    className={`${currentPage === index + 1
                                        ? 'bg-blue-500 text-white'
                                        : 'bg-white text-gray-700 hover:bg-gray-100'
                                        } px-3 py-2 rounded-md cursor-pointer mx-1`}
                                >
                                    {index + 1}
                                </button>
                            ))}
                        </nav>
                    </div>
                    <div>
                        <p className='text-gray-500 capitalize text-2xl'>
                            You are in the <span className='text-slate-950 text-3xl font-semibold mx-auto text-center'>{position}</span> position currently.
                        </p>
                    </div>
                    <Signout />
                </>
            ) : (
                <p>Signed Out</p>
            )}
        </div>
    )
}

export default Leaderboard
