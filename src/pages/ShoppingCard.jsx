import React from 'react'
import Header from '../components/Header'
import Menu from '../components/UI/menu/Menu'

const ShoppingCard = () => {
  return (
    <>
    <Header />
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '200px' }}>Це корзина, поки що пусто</div>
    < Menu />
    <Menu /> 
    </>
  )
}

export default ShoppingCard