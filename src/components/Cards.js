import { useState } from 'react';

import catImg from '../img/cool-cat-i-found.jpeg';
import scaryImg from '../img/scary-guy-i-found.jpeg';
import aatroxImg from '../img/aatrox.jpg';
import anneImg from '../img/anne-boleyn.jpeg';
import coldImg from '../img/cold.jpeg';
import fistImg from '../img/fistbump.jpeg';
import beastImg from '../img/hyper-beast.jpeg';
import minionImg from '../img/minion.jpeg';
import pepsiImg from '../img/pepsi-max.jpeg';
import rebelliousImg from '../img/rebellious-and-cool.jpeg';
import sadImg from '../img/sad.jpeg';
import societyImg from '../img/society.jpeg';

import '../styles/Cards.scss';

import Card from './Card';

// constructor for card objects
function CardObject(text, img) {
  this.text = text;
  this.img = img;
  this.alreadyClicked = false;
}

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

// the Cards component
function Cards({ scores, updateScores }) {

  // state
  const [cards, setCards] = useState([
    new CardObject('hah', catImg),
    new CardObject('i am well scary arent i', scaryImg),
    new CardObject('league of legends', aatroxImg),
    new CardObject('i am here to haunt you', anneImg),
    new CardObject('im just CHILLING here HAHDSJDFSKAH', coldImg),
    new CardObject('my guy', fistImg),
    new CardObject('no way guys its M4A1-S hyper beast!', beastImg),
    new CardObject('le minion', minionImg),
    new CardObject('pepsi max', pepsiImg),
    new CardObject('gosh im so rebellious and cool', rebelliousImg),
    new CardObject('cry more, louder', sadImg),
    new CardObject('we live in an ecosystem', societyImg),
  ]);

  // functions
  const shuffleCards = () => {
    setCards(shuffle(cards));
  }

  const markCardAsClicked = (index) => {
    const newCards = [...cards];
    newCards[index].alreadyClicked = true;
    setCards(newCards);
  };

  const resetCardsClicked = () => {
    const newCards = [...cards];
    newCards.forEach((card) => card.alreadyClicked = false);
    setCards(newCards);
  };

  // render
  return (
    <div className="Cards">
      {cards.map((card, index) => {
        return (
          <Card
            key={index}
            cardObj={card}
            scores={scores}
            updateScores={updateScores}
            shuffleCards={shuffleCards}
            markAsClicked={() => markCardAsClicked(index)}
            resetCardsClicked={resetCardsClicked}
          />
        );
      })}
    </div>
  );
}

export default Cards;
