/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useRef, RefObject } from 'react'
import { getPokemonList } from './ItemList.service'
import ItemCard from '../itemCard/ItemCard'
import { ItemListProps, PokemonItem } from './ItemList.types'
import './ItemList.css'
import { useLocation, useNavigate } from 'react-router-dom'

const ItemList = (props: ItemListProps) => {
  const { name = '' } = props
  const [offset, setOffset] = useState(0)
  const [lastOffset, setLastOffset] = useState<number | undefined>()
  const [listMode, setListMode] = useState<'api' | 'fav'>('fav')
  const [pokemonList, setPokemonList] = useState<PokemonItem[]>()
  const divInnerRef = useRef();
  const location = useLocation();
  let navigate = useNavigate()

  useEffect(() => {
    if (listMode === 'api') {
      setPokemonList([])
    }
  }, [name])

  useEffect(() => {
    if (listMode === 'api') {
      if (!pokemonList?.length && lastOffset !== undefined) {
        setLastOffset(undefined)
      } else if (lastOffset === undefined) getData()
    }
  }, [pokemonList])

  useEffect(() => {
    if (listMode === 'api') {
      if (lastOffset === undefined && offset) {
        setOffset(0)
      } else if (!offset) {
        getData()
      }
    }
  }, [lastOffset])

  const handlePlageScroll = () => {
    if (listMode !== 'fav') {
      if (divInnerRef.current) {
        const { scrollTop, scrollHeight, clientHeight } = divInnerRef.current;
        if (scrollTop + clientHeight + 15 >= scrollHeight) {
          setOffset(offset + 1)
        }
      }
    }
  }

  useEffect(() => {
    if (location.pathname === '/favorites') {
      setListMode('fav')
      const favorites = JSON.parse(localStorage.getItem('favoriteList') || '{}')
      const mappedPokemons = Object.keys(favorites).map(pokemon => { return { name: pokemon } })
      if (mappedPokemons.length) {
        setPokemonList(mappedPokemons)
      }
    } else {
      setListMode('api')
      getData()
    }
  }, [location.pathname])

  useEffect(() => {
    if (location.pathname === '/favorites') {
      if (listMode !== 'fav') setListMode('fav')
      const favorites = JSON.parse(localStorage.getItem('favoriteList') || '{}')
      const mappedPokemons = Object.keys(favorites).map(pokemon => { return { name: pokemon } })
      if (mappedPokemons.length && !pokemonList?.length) {
        setPokemonList(mappedPokemons)
      }
    }
  }, [JSON.parse(localStorage.getItem('favoriteList'))])


  useEffect(() => {
    if (listMode === 'api') {
      getData()
    }
  }, [offset])

  const handleRedirection = (name: string) => {
    navigate(`/pokemon/${name}/detail`)
  }

  const getData = async () => {
    if (offset === 0 || offset !== lastOffset) {
      setLastOffset(offset)
      const pokeList = await getPokemonList(offset, name)
      if (pokemonList && pokemonList.length) {
        setPokemonList([...pokemonList, ...pokeList])
      } else setPokemonList(pokeList)
    }
  }

  const renderPokemonList = () => {
    return (
      pokemonList && pokemonList.length
        ? pokemonList?.map((pokemon, index) =>
          <div className='item-wrapper' key={index}>
            <ItemCard name={pokemon.name} onClick={handleRedirection} />
          </div>
        )
        : ''
    )
  }

  return (
    <div className='items-grid' onScroll={handlePlageScroll} ref={divInnerRef as unknown as RefObject<HTMLDivElement>} >
      {renderPokemonList()}
    </div>
  )
}

export default ItemList