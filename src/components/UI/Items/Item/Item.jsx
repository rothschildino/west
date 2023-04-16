import React from 'react'
import styles from './Item.module.css'

const Item = ({product, onAdd}) => {


  return (
    <div className={styles.Item}>
        <div className="container">
            <div className={styles.item__body}>
                {product.map((product) => (
                  <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button onClick={() => {onAdd(product)}}>add to korzuna</button>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Item