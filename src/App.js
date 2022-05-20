import { useState } from 'react';

import './styles/style.scss';

import Header from './components/Header';
import Cards from './components/Cards';

// App component
function App() {
  // state
  const [scores, setScores] = useState({
    score: 0,
    highScore: 0,
  });

  // functions
  const updateScores = (score, highScore) => {
    setScores({ score, highScore });
  };

  // jsx
  return (
    <>
      <Header scores={scores} />
      <Cards scores={scores} updateScores={updateScores} />
    </>
  );
}

export default App;
