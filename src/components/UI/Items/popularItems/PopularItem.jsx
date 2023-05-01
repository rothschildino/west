import React from 'react'
import styles from './popularItem.module.css'

const PopularItem = ({item}) => {

  return (

    <div className={styles.item}>

      <div className={styles.photoItem}>

      </div>

      <h3>{item.price} &#8372; </h3>
      <p>{item.name}</p>

    </div>

  )
}

export default PopularItem