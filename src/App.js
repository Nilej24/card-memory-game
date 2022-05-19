import Header from './components/Header';
import Cards from './components/Cards';

function App() {
  return (
    <div>
      <Header />
      <Cards cards={[5,5,5,5,5,5]} />
    </div>
  );
}

export default App;
