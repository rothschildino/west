import React from 'react'
import styles from './items.module.css'
import Item from '../Item/Item'

const Items = ({product}) => {

  return (
    <div className={styles.items}>
        <div className="container">
            <Item product={product}/>
        </div>
    </div>
  )
}

export default Items