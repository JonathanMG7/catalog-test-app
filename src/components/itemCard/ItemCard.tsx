
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
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList') || '{}')
    if (name && favoriteList[name]) {
      favoriteList[name] = true
      localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
      setIsFavorite(true)
    }
    getData()
  }, [name])

  const [isFavorite, setIsFavorite] = useState(false)
  const [pokeInfo, setPokeInfo] = useState<Pokemon>()

  const handleItemFavorite = (id: string) => {
    setIsFavorite(!isFavorite)
    const favoriteList = JSON.parse(localStorage.getItem('favoriteList') || '{}')
    if (favoriteList[id]) {
      delete favoriteList[id]
    } else {
      favoriteList[id] = true
    }
    localStorage.setItem('favoriteList', JSON.stringify(favoriteList))
  }

  return (
    <div className='card-container' onClick={(e) => onClick(pokeInfo?.name || '')}>
      <FavButton id={pokeInfo?.name || ''} onClick={handleItemFavorite} isFav={isFavorite} />
      <img src={pokeInfo?.image} alt={name} className='item-image'/>
    </div>
  )
}

export default ItemCard