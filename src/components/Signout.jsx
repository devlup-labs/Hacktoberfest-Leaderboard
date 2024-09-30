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
                    <button className="text-white p-2 bg-[#3b82f6] rounded-lg my-10 mx-auto" onClick={logout}>
                    Sign out
                </button>
            )}
        </div>
    )
}

export default Signout