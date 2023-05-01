import React from 'react'
import styles from './Search.module.css'

const Search = ({placeholder, icon}) => {
  return (
    <>
      <div className={styles.search}>

      {icon}
      <input type="text" className={styles.mainSearch} placeholder={placeholder} />

      </div>
      
    </>
    
    
  )
}

export default Search