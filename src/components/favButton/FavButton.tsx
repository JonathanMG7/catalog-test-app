import { FavButtonProps } from './FavButton.types'
import { FavoriteBorder, Favorite } from '@material-ui/icons'
import './FavButton.css'

const FavButton = (props: FavButtonProps) => {
  const {
    onClick,
    isFav,
    id
  } = props

  const renderIcon = () => {
    return isFav ? <Favorite className={`favorite-icon fav-button`} /> : <FavoriteBorder className='fav-button' />
  }

  const handleClickEvent = (event: any) => {
    event.stopPropagation();
    onClick(id);
  }

  return (
    <div onClick={handleClickEvent} className='fav-icon-container'>
      {renderIcon()}
    </div>
  )
}

export default FavButton