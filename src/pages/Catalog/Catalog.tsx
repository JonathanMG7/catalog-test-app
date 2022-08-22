import './Catalog.css'
import ItemList from '../../components/itemList/ItemList';
import SearchBar from '../../components/searchBar/SearchBar';
import { useState } from 'react';

const Catalog = () => {
  const [keyword, setKeyword] = useState('')

  const handleSearch = (key: string) => {
    setKeyword(key)
  }

  return (
    <div className='catalog-page'>
      <SearchBar onChange={handleSearch} />
      <ItemList name={keyword} />
    </div>
  )
}

export default Catalog