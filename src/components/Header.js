function Header({ scores }) {
  return(
    <header>
      <div className="left">
        <h1>something memory game</h1>
        <p>click each image once...</p>
      </div>
      <div className="right">
        <p>current score: {scores.score}</p>
        <p>high score: {scores.highScore}</p>
      </div>
    </header>
  );
}

export default Header;
