import React from 'react'
import { useGSignIn } from '../hooks/useGoogleSignin'
import Signin from './Signin'

const GSiginIn = () => {
    const { login, logined, isPending } = useGSignIn()
    return (
        <div>
            {
                logined ?
                    (
                        <div>
                            <Signin />
                        </div>
                    )
                    : (
                        <div>
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