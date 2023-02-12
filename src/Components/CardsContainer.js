import React from 'react'


export default function CardsContainer(props) {

    
   

  return (
    <div className="container">
        
        <div className="box-container">

          
          {props.cards.map(card => (
              <div className="box" key={card.id}  onClick={props.handleClick}  value={card} >
                   <img onClick={props.handleClick} src={card.name} value={card} alt="" />
                   <h3>{card.Name}</h3>
               </div>
          ))}
            
                        
            
        </div>
        
    </div>
  )
}
