import React from 'react'
import img1 from './images/img1.jpg'
import morty from './images/morty.jpg'
import rick from './images/rick.webp'
import jerry from './images/jerry.jpg'
import beth from './images/beth.webp'
import birdperson from './images/birdperson.jpg'
import saul from './images/saul.webp'
import waltuh from './images/walter.webp'
import jesse from './images/jesse.webp'
import kid from './images/kid.jpg'
import tsira from './images/tsira.webp'








export default function CardsContainer() {
  return (
    <div className="container">
        <div className="box-container">
            <div className="box">
                <img src={rick}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={morty}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={jerry}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={beth}alt="" />
                <h3>Name of whatever</h3>
            </div>
            
            <div className="box">
                <img src={birdperson}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={saul}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={waltuh}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={jesse}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={kid}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box">
                <img src={tsira}alt="" />
                <h3>Name of whatever</h3>
            </div>
        </div>
        
    </div>
  )
}
