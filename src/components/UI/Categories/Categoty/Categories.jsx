import React from 'react'
import Category from './Category'
import styles from './categories.module.css'

const Categories = ({categories}) => {
  return (
    <div className={styles.categories}>
        <div className="container">
            <div className={styles.categories__body}>
              
              {categories.map((el) => (
                  <Category key={el.key} category={el}/>
              ))}
            </div>
        </div>
    </div>
  )
}

export default Categories