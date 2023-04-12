import React from 'react'
import Search from './UI/Inputs/Search'

import '../styles/Header.css'
import '../App.css'
import { ButtonMain } from './UI/Buttons/ButtonMain'
import { AiOutlineMenu, AiOutlineUser, AiOutlineShoppingCart, AiOutlineEnvironment, AiOutlinePhone } from 'react-icons/ai';




const Header = () => {

  const strokeWidthIcons = 20

  return (
    <header className='header'>
      <div className='container'>
        <div className='header_body'>
          <div className='logo'>
            <h1>WEST</h1>
          </div>

          <div className='fixed_header'>
            <Search placeholder={'Я шукаю ...'} />
            <div className='icons'>
            < AiOutlineShoppingCart className='icon' strokeWidth={strokeWidthIcons} stroke='white' />
            < AiOutlineEnvironment className='icon location' strokeWidth={strokeWidthIcons} stroke='white'/>
            < AiOutlinePhone className='icon phone' strokeWidth={strokeWidthIcons} stroke='white'/>
            </div>
          </div>
          
          <div className="cabinet">
            <ButtonMain text={'Меню'} icon={ <AiOutlineMenu /> } className='button_menu' />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

