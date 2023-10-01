import React from 'react'
import { useGSignIn } from '../hooks/useGoogleSignin'
import Signin from './Signin'
import LeaderboardNoAuth from './LeaderboardsNoAuth'

const GSiginIn = () => {
    const { login, logined, isPending } = useGSignIn()
    return (
        <div className='body h-screen'>
            {
                logined ?
                    (
                        <div>
                            <Signin />
                        </div>
                    )
                    : (
                        <div className='flex flex-col gap-8 w-2/3 mx-auto'>
                            <LeaderboardNoAuth />
                            <button className="bg-blue-600 text-white hover:text-blue-600 hover:bg-white mx-auto text-cneter mt-[100px] flex justify-center items-center p-4 border border-black rounded-md" onClick={login}>
                                {!isPending ? "Sign In with Google" : "Loading...."}
                            </button>
                        </div>
                    )
            }
        </div>
    )
}

export default GSiginIn