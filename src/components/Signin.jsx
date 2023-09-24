import React from 'react'
import { useSignIn } from '../hooks/useSignIn'
import Leaderboard from './Leaderboard'

const Signin = () => {
    const { login, isPending, logined, userIn } = useSignIn()
    return (
        <div>
            {logined ? (
                <div>
                    <Leaderboard status={logined} >
                        {userIn.displayName}
                    </Leaderboard>
                </div>
            ) : <div>
                <button onClick={login} className=''>
                    {isPending ? "Loading....." : "Login With Git hub"}
                </button>
            </div>}
        </div>
    )
}

export default Signin