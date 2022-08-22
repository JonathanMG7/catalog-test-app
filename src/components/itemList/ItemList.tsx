import { useEffect, useState, useRef, RefObject } from 'react'
import { getPokemonList } from './ItemList.service'
import ItemCard from '../itemCard/ItemCard'
import { PokemonItem } from './ItemList.types'
import './ItemList.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ItemList = () => {
  const [offset, setOffset] = useState(0)
  const [lastOffset, setLastOffset] = useState<number>()
  const [listMode, setListMode] = useState<'api' | 'fav'>('fav')
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>()
  const divInnerRef = useRef();
  const location = useLocation();
  let navigate = useNavigate()

  const handlePlageScroll = () => {
    if (divInnerRef.current) {
      const { scrollTop, scrollHeight, clientHeight } = divInnerRef.current;
      console.log(scrollTop + clientHeight, scrollHeight)
      if (scrollTop + clientHeight + 15 >= scrollHeight) {
        setOffset(offset + 1)
      }
    }
  }

  useEffect(() => {
    if (location.pathname === '/favorites') {
      setListMode('fav')
      const favorites = JSON.parse(localStorage.getItem('favoriteList') || '[]')
      const mappedPokemons = Object.keys(favorites).map(pokemon => {return { name: pokemon }})
      setPokemonList(mappedPokemons)
    } else {
      setListMode('api')
      getData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, JSON.parse(localStorage.getItem('favoriteList') || '[]')])


  useEffect(() => {
    if (listMode === 'api') {
      getData()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [offset])

  const handleRedirection = (name: string) => {
    navigate(`/pokemon/${name}/detail`)
  }

  const getData = async () => {
    if (offset !== lastOffset) {
      const pokeList = await getPokemonList(offset)
      setLastOffset(offset)
      if (pokemonList && pokemonList.length) {
        setPokemonList([...pokemonList, ...pokeList])
      } else setPokemonList(pokeList)
    }
  }

  const renderPokemonList = () => {
    return (
      pokemonList?.map((pokemon, index) =>
        <div className='item-wrapper'>
          <ItemCard name={pokemon.name} key={pokemon} onClick={handleRedirection} />
        </div>
      )
    )
  }

  return (
    <div className='items-grid' onScroll={handlePlageScroll} ref={divInnerRef as unknown as RefObject<HTMLDivElement>} >
      {renderPokemonList()}
    </div>
  )
}

export default ItemList