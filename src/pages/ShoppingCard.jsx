import React from 'react'
import Header from '../components/Header'
import Menu from '../components/UI/menu/Menu'

const ShoppingCard = ({card}) => {
  return (
    <>
    <Header />
    <div>
      {card}
    </div>
    < Menu />
    </>
  )
}

export default ShoppingCard