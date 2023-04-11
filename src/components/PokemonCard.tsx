import style from './PokemonCard.module.css'

const PokemonCard = () => {
  return (
    <div className={style.pokemonCard}>
      <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/132.png" alt="Imagem Ditto" />
      <p>Ditto</p>
    </div>
  )
}

export default PokemonCard