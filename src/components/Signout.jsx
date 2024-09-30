import React from 'react'
import { useSignout } from '../hooks/useSignOut'
import Signin from './Signin'

const Signout = () => {
    const { logout, out } = useSignout()
    return (
        <div className='text-black'>
            {out === true ? (
                <>
                    <p>
                        Reload.
                    </p>
                    <Signin />
                </>
            ) : (
                <button className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 p-3 rounded-lg my-10 mx-auto text-cneter  flex justify-center items-center " onClick={logout}>
                    Sign out
                </button>
            )}
        </div>
    )
}

export default Signout