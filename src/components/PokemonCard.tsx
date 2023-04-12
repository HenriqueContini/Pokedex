import { useEffect, useState } from 'react'
import style from './PokemonCard.module.css'

interface propsPokemon {
  name: string
  url: string
}

const PokemonCard = ({name, url}: propsPokemon) => {
  const [image, setImage] = useState<string>()

  useEffect(() => {
    getImage()
  })

  async function getImage() {
    const res = await fetch(url)
    const data = await res.json()

    setImage(data.sprites.other['official-artwork'].front_default)
  }
  
  return (
    <div className={style.pokemonCard}>
      <img src={image} alt={`Imagem do ${name}`} />
      <p>{name}</p>
    </div>
  )
}

export default PokemonCard