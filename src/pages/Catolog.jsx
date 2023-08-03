import React from 'react'
import Menu from '../components/UI/menu/Menu'
import Header from '../components/Header'
import Categories from '../components/UI/Categories/Categoty/Categories'

const Catolog = ({product, onAdd, categories, onFilter, category, setCategory}) => {
  return (
    <>
    <Header />
    <Categories setCategory={setCategory} category={category} onFilter={onFilter} categories={categories}/>
    < Menu />
    </>
  )
}

export default Catolog