
import { Fragment } from 'react'
import { FavButtonProps } from './FavButton.types'
import { StarBorder, Star } from '@material-ui/icons'
import './FavButton.css'

const FavButton = (props: FavButtonProps) => {
  const {
    onClick,
    isFav = true,
    id
  } = props

  const renderIcon = () => {
    return isFav ? <Star className={`favorite-icon fav-button`} /> : <StarBorder className='fav-button' />
  }
  return (
    <div onClick={(event) => onClick(id)} className='fav-icon-container'>
      {renderIcon()}
    </div>
  )
}

export default FavButton