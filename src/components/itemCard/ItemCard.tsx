
import { useEffect, useState } from 'react'
import { ItemCardProps, Pokemon } from './ItemCard.types'
import './ItemCard.css'
import FavButton from '../favButton/FavButton'
import { getPokemonInfo } from './ItemCard.service'

const ItemCard = (props: ItemCardProps) => {
  const {
    onClick,
    name = ''
  } = props

  useEffect( () => {
    async function getData() {
      if (name) {
        const pokemonInfo = await getPokemonInfo(name)
        setPokeInfo(pokemonInfo)
      }
    }
    getData()
  }, [name])

  const [isFavorite, setIsFavorite] = useState(false)
  const [pokeInfo, setPokeInfo] = useState<Pokemon>()

  const handleItemFavorite = (id: string) => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className='card-container' onClick={(e) => onClick(pokeInfo?.name || '')}>
      <FavButton id={pokeInfo?.name || ''} onClick={handleItemFavorite} isFav={isFavorite} />
      <img src={pokeInfo?.image} alt={name} className='item-image'/>
    </div>
  )
}

export default ItemCard