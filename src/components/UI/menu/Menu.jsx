import React from 'react'
import styles from './menu.module.css'
import ButtonMenu from './ButtonMenu'
import { AiOutlineHome, AiOutlineAppstore, AiOutlineShoppingCart } from "react-icons/ai";

const Menu = ({name}) => {
  return (
    <menu className={styles.menu}>
        <div className={styles.container}>
            <div className={styles.menu__body}>
                <ButtonMenu text={'Головна'} icon={ <AiOutlineHome className={styles.icon} /> } navigateTo={'/west/'} />
                <ButtonMenu text={'Каталог'} icon={ <AiOutlineAppstore className={styles.icon} /> } navigateTo={'/west/catolog'} />
                <ButtonMenu text={'Корзина'} icon={ <AiOutlineShoppingCart className={styles.icon} /> } navigateTo={'/west/shoppingCard'}/>
            </div>
        </div>
    </menu>
  )
}

export default Menu