import React from 'react'
import styles from './Item.module.css'

const Item = ({product}) => {


  return (
    <div className={styles.Item}>
        <div className="container">
            <div className={styles.item__body}>
                {product.map((product) => (
                  <div key={product.id}>
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                    <button>add to korzuna</button>
                  </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Item