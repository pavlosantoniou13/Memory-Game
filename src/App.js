import Navbar from "./Components/Navbar";
import './styles.css'
import CardsContainer from "./Components/CardsContainer";
import { useState, useEffect } from "react";
import morty from './Components/images/morty.jpg'
import rick from './Components/images/rick.webp'
import jerry from './Components/images/jerry.jpg'
import beth from './Components/images/beth.webp'
import birdperson from './Components/images/birdperson.jpg'
import saul from './Components/images/saul.webp'
import waltuh from './Components/images/walter.webp'
import jesse from './Components/images/jesse.webp'
import kid from './Components/images/kid.jpg'
import tsira from './Components/images/tsira.webp'

const cardsObj = [
  { name: morty, Name: "Morty" , isClicked:false },
  { name: rick, Name: "Rick" , isClicked:false },
  { name: jerry, Name: "Jerry", isClicked:false },
  { name: birdperson, Name: "Birdperson" , isClicked:false },
  { name: saul, Name: "Saul" , isClicked:false },
  { name: beth, Name: "Beth"  , isClicked:false},
  { name: waltuh, Name: "Waltuh" , isClicked:false },
  { name: jesse, Name: "Jesse" , isClicked:false },
  { name: tsira, Name: "Tsira"  , isClicked:false},
  { name: kid, Name: "Kid" , isClicked:false }
  
]
 
function App() {

  const [cards, setCards] = useState(cardsObj)
  const [clickedCard, setClickedCard] = useState(null)
  const [score, setscore] = useState(0)

  const shuffleCards = () => {
   const shuffledcards = [...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledcards)
    
  }

  const handleClick = (card) => {
    
    setClickedCard({...card, isClicked:true})

    console.log(card)

    

    shuffleCards()

    scoreCounter(card)

    //console.log(clickedCard)

    
  }

  

  function scoreCounter(card) {

    if(card.isClicked === true) {
      setscore(0)
      
    } else if(card.isClicked === false) {
      setscore(score + 1)
      console.log("you won")
    }
    
  }

  useEffect(() => {
    if(clickedCard) {
     setCards(prevCards => {
      return prevCards.map(card => {
        if(clickedCard.Name === card.Name){
          return {...card, isClicked:true}
        } else {
          return card
        }
      }) 
     })
      
      
    }
  },[clickedCard])
  
  
  
  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  shuffleCards()
    return () => { ignore = true; }
    },[]);

    console.log(cards)

  return (
    <div>
      <Navbar score={score} />
      <CardsContainer shuffleCards={shuffleCards} cards={cards} handleClick={handleClick}  />
    </div>
    
  );
}

export default App;
