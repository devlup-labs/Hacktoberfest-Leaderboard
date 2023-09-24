import React from 'react'
import Signout from './Signout'
const Leaderboard = ({ children, status }) => {
    return (
        <div>
            {status ? (
                <>
                    <p>Hi</p>
                    {children}
                    <Signout />
                </>
            ) :
                (<p>Signed Out</p>)}
        </div>
    )
}

export default Leaderboard

