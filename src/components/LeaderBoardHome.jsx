import React from 'react'
import LeaderboardNoAuth from './LeaderboardsNoAuth'
import Leaderboard from './Leaderboard'
import { useUserList } from '../hooks/useUserList'
import { Link } from 'react-router-dom'

function LeaderBoardHome() {
    // const {usrList, loading }= useUserList();
    // console.log(usrList);
  return (
    <div>
        <div className="body">
            <h1 className="text-green-400 text-4xl text-center pt-20 font-serif font-bold ">
            DEVLUP {"  "} LABS
            </h1>
            <div className="h-screen" style={{margin:"auto", width:"75%"}}>
            <LeaderboardNoAuth />
            {/* <button className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8' style={{display: 'flex'}}>
                Want to register?
            </button> */}
            <Link to="/register">
                <button className='bg-green-400 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mt-8' style={{display: 'flex'}}>
                    Want to register?
                </button>
            </Link>
            </div>
            
        </div>
    </div>
  )
}

export default LeaderBoardHome