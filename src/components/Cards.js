import React from 'react';

import Card from './Card';

function Cards({ cards, shuffle }) {

  return (
    <div className="cards">
      {cards.map((card, index) => {
        return (
          <Card key={index} text={card.text} img={card.img} onClick={shuffle} />
        );
      })}
    </div>
  );
}

export default Cards;
