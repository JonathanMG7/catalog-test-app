
import { useState } from 'react'
import { ItemCardProps } from './ItemCard.types'
import './ItemCard.css'
import FavButton from '../favButton/FavButton'

const ItemCard = (props: ItemCardProps) => {
  const {
    onClick,
    imageUrl,
    id,
    name = ''
  } = props

  const [isFavorite, setIsFavorite] = useState(false)

  const handleItemFavorite = (id: string) => {
    setIsFavorite(!isFavorite)
  }

  return (
    <div className='card-container' onClick={(e) => onClick(id)}>
      <FavButton id={id} onClick={handleItemFavorite} isFav={isFavorite} />
      <img src={imageUrl} alt={name} className='item-image'/>
    </div>
  )
}

export default ItemCard