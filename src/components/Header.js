function Header({ score, highScore }) {
  return(
    <header>
      <div className="left">
        <h1>something memory game</h1>
        <p>click each image once...</p>
      </div>
      <div className="right">
        <p>current score: {score}</p>
        <p>high score: {highScore}</p>
      </div>
    </header>
  );
}

export default Header;
