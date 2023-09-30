import React from 'react'
import { useSignIn } from '../hooks/useSignIn'
import Leaderboard from './Leaderboard'

const Signin = () => {
    const { login, isPending, logined, username, users } = useSignIn()
    return (
        <div>
            {logined ? (
                <div>
                    <Leaderboard status={logined} >
                        {[username, users]}
                    </Leaderboard>
                </div>
            ) : <div>
                <button className="bg-blue-600 text-white hover:text-blue-600 hover:bg-white mx-auto text-cneter mt-[100px] flex justify-center items-center p-4 border border-black rounded-md" onClick={login} >
                    {isPending ? "Loading....." : "Login With Git hub"}
                </button>
            </div>}
        </div>
    )
}

export default Signin