import React from 'react'

export default function Navbar(props) {
  return (
    <nav className='navbar'>
        <div className="title"><h1>Memory card game</h1></div>
        <div className="scoreBoard">
        <div className="score"><h1>Score: {props.score}</h1></div>
        <div className="bestScore"><h1>Best score: {props.highScore} </h1> </div>
        </div>
    </nav>
  )
}
