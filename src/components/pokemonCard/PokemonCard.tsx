import { useEffect, useState } from 'react'
import ItemCard from '../itemCard/ItemCard'
import { getPokemonInfo } from '../itemCard/ItemCard.service'
import { ItemCardProps, Pokemon } from '../itemCard/ItemCard.types'
import { PokemonCardProps } from './PokemonCard.types'
import './PokemonCard.css'

const PokemonCard = (props: PokemonCardProps) => {
  const {
    name
  } = props

  useEffect(() => {
    async function getData() {
      if (name) {
        const pokemonInfo = await getPokemonInfo(name)
        setPokeInfo(pokemonInfo)
      }
    }
    getData()
  }, [name])

  const [pokeInfo, setPokeInfo] = useState<Pokemon>()

  const getProps = (): ItemCardProps => {
    return {
      onClick: (id: string) => {return},
      name: name,
      pokemon: pokeInfo
    }
  }

  return (
    <div className='card-wrapper'>
      <h1>{pokeInfo?.name}</h1>
      <div className='pokemon-card'>
        <section className='card-info'>
          <ItemCard {...getProps()} />
        </section>
        <section>
          <ul>
            <li><span className='pokemon-key'>Pokemon ID:</span> {pokeInfo?.id}</li>
            <li><span className='pokemon-key'>Height:</span> {pokeInfo?.height}</li>
            <li><span className='pokemon-key'>Weight:</span> {pokeInfo?.weight}</li>
            <li><span className='pokemon-key'>Types:</span> [{pokeInfo?.types.map(type => type.type.name).join(',')}]</li>
            <li><span className='pokemon-key'>Moves:</span> [{pokeInfo?.moves.map(type => type.move.name).join(', ')}]</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default PokemonCard