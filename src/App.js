import Navbar from "./Components/Navbar";
import './styles.css'
import CardsContainer from "./Components/CardsContainer";
import { useState } from "react";

const cardsObj = [
  { "src": './Components/images/morty.jpg' },
  { "src": './Components/images/rick.webp' },
  { "src": './Components/images/jerry.jpg' },
  { "src": './Components/images/beth.jpg' },
  { "src": './Components/images/kid.jpg'},
  { "src": './Components/images/saul.webp'},
  { "src": './Components/images/walter.webp'},
  { "src": './Components/images/tsira.webp'},
  { "src": './Components/images/birdperson.jpg'},
  { "src": './Components/images/jesse.webp'},
]
 
function App() {

  const [cards, setCards] = useState([])

  const shuffleCards = () => {
   const shuffledcards = [...cardsObj]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random(), isClicked:false }))

    setCards(shuffledcards)
    
    
  }

  console.log(cards)
  
  return (
    <div>
      <Navbar  />
      <CardsContainer shuffleCards={shuffleCards} cards={cards} />
    </div>
    
  );
}

export default App;
