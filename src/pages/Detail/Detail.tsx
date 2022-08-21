import { useParams } from 'react-router-dom';
import PokemonCard from '../../components/pokemonCard/PokemonCard'
import './Detail.css'

const Detail = () => {
  const { pokemonName } = useParams()

  return (
    <div className='details-page'>
      <PokemonCard name={pokemonName || ''} />
    </div>
  )
}

export default Detail