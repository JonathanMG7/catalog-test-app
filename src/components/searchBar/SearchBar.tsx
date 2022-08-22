import { TextField } from '@mui/material'
import { useEffect } from 'react'
import { useState } from 'react'
import { SearchBarProps } from './SearchBar.types'
import './SearchBar.css'

const SearchBar = (props: SearchBarProps) => {
  const { onChange } = props
  const [searchKeyword, setSearchKeyword] = useState<string>()
  let timer: NodeJS.Timeout

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    timer = setTimeout(() => {
      onChange(searchKeyword || '')
    }, 2000)
  }, [searchKeyword])

  const handleChange = (keyword: string) => {
    clearTimeout(timer)
    setSearchKeyword(keyword)
  }

  return (
    <div className='search-container'>
      <TextField placeholder='Pokemon Name' type={'text'} onChange={(e) => handleChange(e.target.value)}></TextField>
    </div>
  )
}

export default SearchBar