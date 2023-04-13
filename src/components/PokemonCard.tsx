import { useEffect, useState } from 'react'
import style from './PokemonCard.module.css'
import loading_pokeball from '../assets/img/loading_pokeball.png'

interface propsPokemon {
  name: string
  url: string
}

const PokemonCard = ({ name, url }: propsPokemon) => {
  const [image, setImage] = useState<string>()

  useEffect(() => {
    getImage()
  })

  async function getImage() {
    const res = await fetch(url)
    const data = await res.json()

    setImage(data.sprites.front_default)
  }

  return (
    <div className={style.pokemonCard}>
      {image ? <img src={image} alt={`Imagem do ${name}`} />
        : <img src={loading_pokeball} className={style.loading} alt={`Carregando`} />
      }
      <p>{name}</p>
    </div>
  )
}

export default PokemonCard