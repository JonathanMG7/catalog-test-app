import { useEffect, useState } from 'react'
import { getPokemonList } from './ItemList.service'
import ItemCard from '../itemCard/ItemCard'
import { PokemonItem } from './ItemList.types'
import './ItemList.css'
import { useNavigate } from 'react-router-dom'

const ItemList = () => {
  const [offset, setOffset] = useState(0)
  let navigate = useNavigate()
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>()

  const handlePlageScroll = (event: any) => {

    console.log(event)
  }


  useEffect(() => {
    async function getData() {
      const pokeList = await getPokemonList(offset)
      if (pokemonList && pokemonList.length) {
        setPokemonList([...pokemonList, ...pokeList])
      } else setPokemonList(pokeList)
    }
    getData()
  }, [offset])

  const handleRedirection = (name: string) => {
    navigate(`/pokemon/${name}/detail`)
  }

  const renderPokemonList = () => {
    return (
      pokemonList?.map((pokemon, index) =>
        <div className='item-wrapper'>
          <ItemCard name={pokemon.name} key={index} onClick={handleRedirection} />
        </div>
      )
    )
  }

  return (
    <div className='items-grid' onScroll={handlePlageScroll} >
      {renderPokemonList()}
    </div>
  )
}

export default ItemList