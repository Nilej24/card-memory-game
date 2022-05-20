import { useState } from 'react';

import catImg from './img/cool-cat-i-found.jpeg';
import scaryImg from './img/scary-guy-i-found.jpeg';
import aatroxImg from './img/aatrox.jpg';
import anneImg from './img/anne-boleyn.jpeg';

import Header from './components/Header';
import Cards from './components/Cards';

// for shuffling cards (mostly copy pasted from stack overflow)
function shuffle(array) {
  const newArray = [...array]

  let currentIndex = array.length;
  let randomIndex;

  // while there remain elements to shuffle.
  while (currentIndex > 0) {

    // pick a remaining element.
    randomIndex = Math.floor(Math.random() * (currentIndex));
    currentIndex--;

    // and swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex], newArray[currentIndex]];
  }

  return newArray;
}

// constructor for card objects
function Card(text, img) {
  this.text = text;
  this.img = img;
}

// App component
function App() {
  // state
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [cards, setCards] = useState([
    new Card('im so cool', catImg),
    new Card('i am well scary arent i', scaryImg),
    new Card('hi guys aatrox here', aatroxImg),
    new Card('i am here to haunt you', anneImg),
  ]);

  // event handlers
  const updateScore = (newScore, newHighScore) => {
    setScore(newScore);
    setHighScore(newHighScore);
  };

  // jsx
  return (
    <>
      <Header score={score} highScore={highScore} />
      <Cards cards={cards} updateScore={updateScore} shuffle={() => setCards(shuffle(cards))} />
    </>
  );
}

export default App;
