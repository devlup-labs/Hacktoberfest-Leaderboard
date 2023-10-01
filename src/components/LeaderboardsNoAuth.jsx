import React from 'react';
import { useUserList } from '../hooks/useUserList';

const LeaderboardNoAuth = () => {
    const { users, isLoading } = useUserList();

    return (
        <div className='text-black'>
            <div>
                <h2 className="text-3xl font-semibold mb-4">Leaderboard</h2>
                <div className="bg-white shadow-md rounded-lg">
                    {isLoading ? (
                        <p className="p-4 text-center">Loading...</p>
                    ) : (
                        <table className="min-w-full table-auto">
                            <thead>
                                <tr>
                                    <th className="px-4 py-2 text-left">Username</th>
                                    <th className="px-4 py-2 text-left">Contributions</th>
                                    <th className="px-4 py-2 text-left">Accepted PRs</th>
                                    <th className="px-4 py-2 text-left">Last Updated</th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr key={user.username}>
                                        <td className="border px-4 py-2">{user.username}</td>
                                        <td className="border px-4 py-2">{user.HacktoberFestContributions}</td>
                                        <td className="border px-4 py-2">{user.AcceptedHacktoberFestPRs}</td>
                                        <td className="border px-4 py-2">{user.updatedAt}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    )}
                </div>
            </div>
        </div>
    );
}

export default LeaderboardNoAuth;
