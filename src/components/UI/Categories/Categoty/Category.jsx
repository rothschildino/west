import React from 'react'
import styles from './categories.module.css'

const Category = ({category}) => {
  return (
    <div className={styles.category}>
      <img src="https://i0.wp.com/www.hydrohouse.ua/wp-content/uploads/2022/01/zahlush.png?resize=300%2C300&ssl=1" alt="" />
      <p>{category.name}</p>
    </div>
  )
}

export default Category