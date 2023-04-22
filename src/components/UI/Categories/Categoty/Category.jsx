import React from 'react'
import styles from './categories.module.css'
import { Link, useNavigate } from 'react-router-dom';


const Category = ({onFilter, category, categoryArray}) => {

  const navigate = useNavigate();

  

  return (
    <div className={styles.category} >
      <img src="https://i0.wp.com/www.hydrohouse.ua/wp-content/uploads/2022/01/zahlush.png?resize=300%2C300&ssl=1" alt="" />
      <p>{category.name}</p>
      <button onClick={() => {

        onFilter(category.name)
        navigate('/west/product-category/');
        console.log(category.name)
        console.log(categoryArray)
        

        }}>Перейти</button>
    </div>
  )
}

export default Category