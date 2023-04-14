import React from 'react'
import Search from './UI/Inputs/Search'

import '../styles/Header.css'
import '../App.css'
import { ButtonMain } from './UI/Buttons/ButtonMain'
import { AiOutlineMenu, AiOutlineContacts, AiOutlineShoppingCart, AiOutlineEnvironment, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';




const Header = () => {

  const strokeWidthIcons = 20

  return (
    <header className='header'>
      <div className='container'>
        <div className='header_body'>
          <div className='logo'>
            <h1>WEST</h1>
          </div>
          <div className='icons'>
          <AiOutlineSearch />
          <AiOutlineContacts />
          </div>
          

          
          <div className="cabinet">
            <ButtonMain text={'Меню'} icon={ <AiOutlineMenu /> } />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

