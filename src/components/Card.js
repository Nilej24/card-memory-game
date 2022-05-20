import '../styles/Card.scss';

function Card({ cardObj, scores, updateScores, shuffleCards, markAsClicked, resetCardsClicked }) {

  const onClick = () => {
    const { score, highScore } = scores;

    // if game over
    if (cardObj.alreadyClicked) {
      const newHighScore = score > highScore ? score : highScore;
      updateScores(0, newHighScore);
      resetCardsClicked();
      return;
    }

    // else
    markAsClicked();
    shuffleCards();
    updateScores(score + 1, highScore);
  }

  return (
    <div className="Card" onClick={onClick}>
      <img src={cardObj.img} alt="" />
      <h3 className="cardText">{cardObj.text}</h3>
    </div>
  );
}

export default Card;
