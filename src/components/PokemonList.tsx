import style from './PokemonList.module.css'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
  return (
    <section className={style.pokemonList}>
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
      <PokemonCard />
    </section>
  )
}

export default PokemonList