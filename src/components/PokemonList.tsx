import style from './PokemonList.module.css'
import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

interface JsonTypes {
  name: string
  url: string
}

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<JsonTypes[]>([])
  const [nextURL, setNextURL] = useState<string>()

  useEffect(() => {
    loadPokemonList()
  }, [])

  async function loadPokemonList() {
    const res = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100')
    const data = await res.json()

    setNextURL(data.next)
    setPokemon([...pokemon, ...data.results])
  }

  return (
    <section className={style.pokemonList}>
      {pokemon ? pokemon.map((p: {name: string, url: string}, index: number) => <PokemonCard key={index + 1} name={p.name} url={p.url}/>) : null}
    </section>
  )
}

export default PokemonList