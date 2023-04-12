import style from './PokemonList.module.css'
import { useEffect, useState } from 'react'
import PokemonCard from './PokemonCard'

interface JsonTypes {
  name: string
  url: string
}

const PokemonList = () => {
  const [pokemon, setPokemon] = useState<JsonTypes[]>([])
  const [URL, setURL] = useState<string>('https://pokeapi.co/api/v2/pokemon?limit=40')
  const [isAtBottom, setIsAtBottom] = useState<boolean>(false)
  const root = document.getElementById('root')!;

  useEffect(() => {
    loadPokemonList(URL)

    if(pokemon) {
      window.addEventListener("scroll", () => {
        if(window.scrollY >= (root.scrollHeight - window.innerHeight)) {
          setIsAtBottom(true)
        }
      })
    }
  }, [])

  useEffect(() => {
    if(isAtBottom) {
      console.log('Funfou')
      loadPokemonList(URL)
    }
  }, [isAtBottom])

  async function loadPokemonList(url: string) {
    const res = await fetch(url)
    const data = await res.json()

    setURL(data.next)
    setPokemon([...pokemon, ...data.results])
    setIsAtBottom(false)
  }

  return (
    <section className={style.pokemonList} id='pokemonList'>
      {pokemon ? pokemon.map((p: {name: string, url: string}, index: number) => <PokemonCard key={index + 1} name={p.name} url={p.url}/>) : null}
    </section>
  )
}

export default PokemonList