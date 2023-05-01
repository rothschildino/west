import React from 'react'
import Header from '../components/Header'
import Menu from '../components/UI/menu/Menu'
import Order from '../components/UI/Items/Cards/Order'
import { useDispatch, useSelector } from 'react-redux'

const ShoppingCard = ({card}) => {

  

  return (
    <>
    <Header />
      <div style={{marginTop: '200px'}}>
        {card.map((el) => (
          <Order key={el.id} card={el}/>
        ))}
      </div>

    < Menu />
    </>
  )
}

export default ShoppingCard 