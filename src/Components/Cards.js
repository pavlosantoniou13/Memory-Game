import React from 'react'



export default function Card( props ) {

  const handleChoice = () => {
    props.handleClick(props.card)
  }

  return (
    <div className="box" key={props.card.id}  onClick={handleChoice}  card={props.card} >
      <img  src={props.card.name}  alt="" />
      <h3>{props.card.Name}</h3>
    </div>
  )
}
