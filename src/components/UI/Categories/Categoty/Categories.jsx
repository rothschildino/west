import React from 'react'
import Category from './Category'
import styles from './categories.module.css'



const Categories = ({categories, onFilter, category}) => {
  return (
    <div className={styles.categories}>
        <div className="container">
            <div className={styles.categories__body}>

              <h1>Категорії</h1>
              
              {categories.map((el) => (
                  <Category categoryArray={category} onFilter={onFilter} key={el.key} category={el} />
              ))}
            </div>
        </div>
    </div>
  )
}

export default Categories 