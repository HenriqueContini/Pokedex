import { useEffect, useState } from 'react'
import style from './PokemonCard.module.css'
import loading_pokeball from '../assets/img/loading_pokeball.png'

interface PropsPokemon {
  name: string
  url: string
}

interface Pokemon {
  sprites: {
    front_default: string
  }
  types: {
    type: {
      name: string
    }
  }[]
}

interface TypeColor {
  nameType: string,
  color: string
}

const PokemonCard = ({ name, url }: PropsPokemon) => {
  const [image, setImage] = useState<string>()
  const [pokemonType, setPokemonType] = useState<TypeColor[]>([])
  const colours = new Map(Object.entries({
    normal: '#A8A77A',
    fire: '#EE8130',
    water: '#6390F0',
    electric: '#F7D02C',
    grass: '#7AC74C',
    ice: '#96D9D6',
    fighting: '#C22E28',
    poison: '#A33EA1',
    ground: '#E2BF65',
    flying: '#A98FF3',
    psychic: '#F95587',
    bug: '#A6B91A',
    rock: '#B6A136',
    ghost: '#735797',
    dragon: '#6F35FC',
    dark: '#705746',
    steel: '#B7B7CE',
    fairy: '#D685AD',
  }));

  useEffect(() => {
    getData()
  }, [])

  async function getData() {
    const res = await fetch(url)
    const data: Pokemon = await res.json()

    setImage(data.sprites.front_default)

    const types: TypeColor[] = []

    data.types.map(t => {
      types.push({
        nameType: t.type.name,
        color: colours.get(t.type.name)!
      })
    })

    setPokemonType(types)
  }

  return (
    <div className={style.pokemonCard}>
      {image ? <img src={image} alt={`Imagem do ${name}`} />
        : <img src={loading_pokeball} className={style.loading} alt={`Carregando`} />
      }
      <div className={style.typeContainer}>
        {pokemonType.map((type, index: number) => <p key={index} style={{ backgroundColor: type.color }}>{type.nameType}</p>)}
      </div>
      <p className={style.pokemonName}>{name}</p>
    </div>
  )
}

export default PokemonCard