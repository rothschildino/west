import React from 'react'
import styles from './items.module.css'
import Item from '../Item/Item'

const Items = ({product, onAdd}) => {

  return (
    <div className={styles.items}>
        <div className="container">
            <Item product={product} onAdd={onAdd}/>
        </div>
    </div>
  )
}

export default Items