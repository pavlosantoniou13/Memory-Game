import React from 'react'
import Card from './Cards'



export default function CardsContainer(props) {

    
   

  return (
    <div className="container">
        
        <div className="box-container">

          
          {props.cards.map(card => (
             <Card key={card.id} card={card} handleClick={props.handleClick} /> 
          ))}
            
                        
            
        </div>
        
    </div>
  )
}
