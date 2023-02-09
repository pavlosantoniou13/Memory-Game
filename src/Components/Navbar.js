import React from 'react'

export default function Navbar() {
  return (
    <nav className='navbar'>
        <div className="title"><h1>Memory card game</h1></div>
        <div className="scoreBoard">
        <div className="score"><h1>Score: 0</h1></div>
        <div className="bestScore"><h1>Best score: 0</h1> </div>
        </div>
    </nav>
  )
}
