import React from 'react'
import styles from './order.module.css'

const Order = ({card}) => {

  return (
    <div className={styles.order}>
        <h1>{card.name}</h1>
    </div>
  )
}

export default Order