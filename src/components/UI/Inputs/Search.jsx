import React from 'react'
import'./Search.css';
import { AiOutlineSearch } from "react-icons/ai";

const Search = ({placeholder}) => {
  return (
    <>
    <input type="text" className='mainSearch' placeholder={placeholder}/>
    </>
    
    
  )
}

export default Search