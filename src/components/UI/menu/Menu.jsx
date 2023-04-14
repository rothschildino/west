import React from 'react'
import styles from './menu.module.css'
import ButtonMenu from './ButtonMenu'
import { AiOutlineHome, AiOutlineAppstore, AiOutlineShoppingCart } from "react-icons/ai";

const Menu = ({name}) => {
  return (
    <menu className={styles.menu}>
        <div className={styles.container}>
            <div className={styles.menu__body}>
                <ButtonMenu text={'Головна'} icon={ <AiOutlineHome /> } navigateTo={'/west/'} />
                <ButtonMenu text={'Каталог'} icon={ <AiOutlineAppstore /> } navigateTo={'/west/catolog'} />
                <ButtonMenu text={'Корзина'} icon={ <AiOutlineShoppingCart /> } navigateTo={'/west/shoppingCard'}/>
            </div>
        </div>
    </menu>
  )
}

export default Menu