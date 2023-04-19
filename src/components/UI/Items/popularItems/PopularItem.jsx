import React from 'react'
import styles from './popularItem.module.css'

const PopularItem = ({item}) => {
  return (
    <div className={styles.item}>{item.name}</div>
  )
}

export default PopularItem