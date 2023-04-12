import React from 'react'
import Search from './UI/Inputs/Search'

import '../styles/Header.css'
import '../App.css'
import { ButtonMain } from './UI/Buttons/ButtonMain'
import { AiOutlineMenu, AiOutlineUser, AiFillShopping } from 'react-icons/ai';




const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div className='header_body'>
          <div className='logo'>
            <h1>WEST</h1>
          </div>

          <div className='fixed_header'>
            <ButtonMain text={'Меню'} icon={ <AiOutlineMenu /> }/>
            <Search placeholder={'Я шукаю ...'} />
            <div>
            <AiFillShopping className='shop'/>
            </div>
          </div>
        { /* <ButtonMain  text={'Увійти'} icon={ <AiOutlineUser /> }/> */ }
        </div>
      </div>
    </header>
  )
}

export default Header

