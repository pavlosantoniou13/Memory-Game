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








export default function CardsContainer(props) {

    function printCards() {
        for( let i = 0; i < props.cards.length; i++) {
            console.log(props.cards[i])
        }
    }

  return (
    <div className="container">
        <div className="box-container">
            
            <div className="box"  onClick={props.shuffleCards} >
                {props.cards.map(card => (
                    <div key={card.id}  >
                        <img src={card.src} alt="" />
                        <h3>Name of whatever</h3>
                    </div>
                ))}
            </div>

            <div className="box" onClick={props.shuffleCards} >
                <img src={rick}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards} >
                <img src={morty}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards} >
                <img src={jerry}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards}  >
                <img src={beth}alt="" />
                <h3>Name of whatever</h3>
            </div>
            
            <div className="box" onClick={props.shuffleCards} >
                <img src={birdperson}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards} >
                <img src={saul}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards} >
                <img src={waltuh}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards}  >
                <img src={jesse}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards} >
                <img src={kid}alt="" />
                <h3>Name of whatever</h3>
            </div>

            <div className="box" onClick={props.shuffleCards} >
                <img src={tsira}alt="" />
                <h3>Name of whatever</h3>
            </div>
        </div>
        
    </div>
  )
}
