import React from 'react'
import { useSignout } from '../hooks/useSignOut'
import Signin from './Signin'

const Signout = () => {
    const { logout, out } = useSignout()
    return (
        <div>
            {out === true ? (
                <>
                    <p>
                        Reload.
                    </p>
                    <Signin />
                </>
            ) : (
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500   mx-auto text-cneter mt-[100px] flex justify-center items-center p-4 border border-black rounded-md" onClick={logout}>
                    Sign out
                </button>
            )}
        </div>
    )
}

export default Signout