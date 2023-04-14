import React from 'react'
import Search from './UI/Inputs/Search'

import styles from '../styles/Header.module.css'
import '../App.css'
import { ButtonMain } from './UI/Buttons/ButtonMain'
import { AiOutlineMenu, AiOutlineContacts, AiOutlineShoppingCart, AiOutlineEnvironment, AiOutlinePhone, AiOutlineSearch } from 'react-icons/ai';




const Header = () => {

  const strokeWidthIcons = 20

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.header_body}>



          <div className={styles.logo}>
            <h1>WEST</h1>
          </div>


          <div className={styles.icons}>
            <AiOutlineSearch />
            <AiOutlineContacts />
          </div>
          

          
          
        </div>
      </div>
    </header>
  )
}

export default Header

