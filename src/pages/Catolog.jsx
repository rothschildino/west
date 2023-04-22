import React from 'react'
import Menu from '../components/UI/menu/Menu'
import Header from '../components/Header'
import Categories from '../components/UI/Categories/Categoty/Categories'

const Catolog = ({product, onAdd, categories, onFilter, category}) => {
  return (
    <>
    <Header />
    <Categories category={category} onFilter={onFilter} categories={categories}/>
    < Menu />
    </>
  )
}

export default Catolog