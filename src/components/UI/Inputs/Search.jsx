import React from 'react'
import'./Search.css';

const Search = ({placeholder}) => {
  return (
    <>
    <input type="text" className='mainSearch' placeholder={placeholder}/>
    </>
    
    
  )
}

export default Search