import React from 'react'
import Menu from '../components/UI/menu/Menu'
import Header from '../components/Header'
import Items from '../components/UI/Items/Items/Items'

const Catolog = ({product}) => {
  return (
    <>
    < Header />
    <Items product={product}/>
    < Menu />
    </>
  )
}

export default Catolog