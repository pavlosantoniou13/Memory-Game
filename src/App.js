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
  { name: jerry, Name: "Jerry" },
  { name: birdperson, Name: "Birdperson" , isClicked:false },
  { name: saul, Name: "Saul" , isClicked:false },
  { name: beth, Name: "Beth"  , isClicked:false},
  { name: waltuh, Name: "Waltuh" , isClicked:false },
  { name: jesse, Name: "Jesse" , isClicked:false },
  { name: tsira, Name: "Tsira"  , isClicked:false},
  { name: kid, Name: "Kid" , isClicked:false }
  
]
 
function App() {

  const [cards, setCards] = useState([])

  const shuffleCards = () => {
   const shuffledcards = [...cardsObj]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }))

    setCards(shuffledcards)
    
  }

  const handleClick = (e) => {
    console.log(e.target)

    
    shuffleCards()

    
  }

  console.log(cards)
  
  
  useEffect(() => {
    let ignore = false;
    
    if (!ignore)  shuffleCards()
    return () => { ignore = true; }
    },[]);

  return (
    <div>
      <Navbar  />
      <CardsContainer shuffleCards={shuffleCards} cards={cards} handleClick={handleClick} />
    </div>
    
  );
}

export default App;
