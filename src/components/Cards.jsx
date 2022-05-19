import React from 'react';

function Cards({cards}) {

  return (
    <div className="cards">
      {cards.map((card, index) => {
        return (
          <div className="card">
            <div className="img">(image {index})</div>
            <div className="text">item {index}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards;
