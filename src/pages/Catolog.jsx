import React from 'react'
import Menu from '../components/UI/menu/Menu'
import Header from '../components/Header'
import Items from '../components/UI/Items/Items/Items'
import Categories from '../components/UI/Categories/Categoty/Categories'

const Catolog = ({product, onAdd, categories}) => {
  return (
    <>
    <Header />
    <Categories categories={categories}/>
    <Items product={product} onAdd={onAdd}/>
    < Menu />
    </>
  )
}

export default Catolog