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
  { name: morty, Name: "Morty" },
  { name: rick, Name: "Rick" },
  { name: jerry, Name: "Jerry" },
  { name: birdperson, Name: "Birdperson" },
  { name: saul, Name: "Saul" },
  { name: beth, Name: "Beth" },
  { name: waltuh, Name: "Waltuh" },
  { name: jesse, Name: "Jesse" },
  { name: tsira, Name: "Tsira" },
  { name: kid, Name: "Kid" },
  
]
 
function App() {

  const [cards, setCards] = useState([])

  const shuffleCards = () => {
   const shuffledcards = [...cardsObj]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random(), isClicked:false }))

    setCards(shuffledcards)
    
  }

  const counter = (e) => {
    if(e.event.target.card.isClicked === false) {
      console.log("h karta den eixe patithei")
    } else if(e.event.target.isClicked === false) {
      console.log("h karta eixe patithei")
    }
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
      <CardsContainer shuffleCards={shuffleCards} cards={cards} counter={counter} />
    </div>
    
  );
}

export default App;
