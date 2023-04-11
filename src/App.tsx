import style from './App.module.css';
import Header from './components/Header';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div className={style.app}>
      <Header />
      <PokemonList />
    </div>
  )
}

export default App
