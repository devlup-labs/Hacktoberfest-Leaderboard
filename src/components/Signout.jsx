import React from 'react'
import { useSignout } from '../hooks/useSignOut'
import Signin from './Signin'

const Signout = () => {
    const { logout, out } = useSignout()
    return (
        <div>
            {out === true ? (
                <>
                    <Signin />
                </>
            ) : (
                <button onClick={logout}>
                    Sign out
                </button>
            )}
        </div>
    )
}

export default Signout