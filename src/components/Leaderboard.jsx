import React from 'react'
import Signout from './Signout'
const Leaderboard = ({ children, status }) => {
    const names = []
    //from children extract both names and username from the data 
    return (
        <div>
            {status ? (
                <>
                    <p>Hi</p>
                    {children}
                    <table className='flex justify-center '>
                        <thead>
                            <tr>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Count</th>
                            </tr>
                        </thead>
                        <tbody>
                            {names.map((item, index) => (
                                <tr key={index} className="bg-gray-100">
                                    <td className="border px-4 py-2">{item.Name}</td>
                                    <td className="border px-4 py-2">{item.Count}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <Signout />
                </>
            ) :
                (<p>Signed Out</p>)}
        </div>
    )
}

export default Leaderboard