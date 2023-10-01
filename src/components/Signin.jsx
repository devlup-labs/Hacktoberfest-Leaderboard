import React from 'react'
import { useSignIn } from '../hooks/useSignIn'
import Leaderboard from './Leaderboard'
import LeaderboardNoAuth from './LeaderboardsNoAuth'

const Signin = () => {
    const { login, isPending, logined, users } = useSignIn()
    return (
        <div>
            {logined ? (
                <div>
                    <Leaderboard status={logined} >
                        {users}
                    </Leaderboard>
                </div>
            ) : <div className='flex flex-col gap-8 w-2/3 mx-auto'>
                <LeaderboardNoAuth />
                <button className="bg-blue-600 text-white hover:text-blue-600 hover:bg-white mx-auto text-cneter mt-[100px] flex justify-center items-center p-4 border border-black rounded-md" onClick={login} >
                    {isPending ? "Loading....." : "Login With Git hub"}
                </button>
            </div>}
        </div>
    )
}

export default Signin