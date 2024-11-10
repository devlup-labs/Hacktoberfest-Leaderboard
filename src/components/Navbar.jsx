import React from 'react'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-1 shadow-md  fixed w-[100%] ">\
    <div className='max-w-7xl mx-auto flex items-start space-x-3 justify-between'>
    <div className="flex">
        {/* Logo and Titles */}
        <img 
            src="https://pbs.twimg.com/profile_images/1247951985896120320/Uh_nLgKS_400x400.jpg" 
            alt="Logo"
            className="w-10 h-10 rounded-full"
        />
        <div>
            <h1 className="text-xl font-semibold text-white">Bug Bounty Issues Tracker</h1>
            <p className="text-sm text-gray-400">&lt;/&gt; by DevlUp Labs</p>
        </div>
    </div>
    <div>
    <Link to="/" className='text-xl font-semibold text-white mx-3'>Home</Link>
    <Link to="/issue" className='text-xl font-semibold text-white mx-3'>Issue</Link>
    </div>
    </div>
</nav>
  )
}
