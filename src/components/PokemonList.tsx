import style from './PokemonList.module.css'
import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

const PokemonList = () => {
  const [pokemon, setPokemon] = useState([])
  const [nextURL, setNextURL] = useState<string>()

  useEffect(() => {
    loadPokemonList()
  }, [])

  async function loadPokemonList() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=20')
    const data = await res.json()

    setNextURL(data.next)
    setPokemon(data.results)
  }

  return (
    <section className={style.pokemonList}>
      {pokemon ? pokemon.map((p: {name: string, url: string}, index: number) => <PokemonCard key={index} name={p.name} url={p.url}/>) : null}
    </section>
  )
}

export default PokemonList