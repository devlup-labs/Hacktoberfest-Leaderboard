import React from 'react'
import LeaderboardNoAuth from './LeaderboardsNoAuth'
import { Link } from 'react-router-dom'

function LeaderBoardHome() {
  return (
    <div className=''>
      <div className="w-[90%] mx-auto pt-36 0">
        <div className="mx-auto flex flex-col items-center gap-4">
          <LeaderboardNoAuth />
          <Link to="/register">
            <button className='bg-[#3b82f6] rounded-lg p-3'>
              Want to register?
            </button>
          </Link>
        </div>

      </div>
    </div>
  )
}

export default LeaderBoardHome