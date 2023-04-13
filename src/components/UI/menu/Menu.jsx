import React from 'react'
import './menu.css'
import ButtonMenu from './ButtonMenu'
import { AiOutlineHome } from "react-icons/ai";

const Menu = ({name}) => {
  return (
    <menu className='menu'>
        <div className="container">
            <div className='menu_body'>
                <ButtonMenu text={'Головна'} icon={ <AiOutlineHome /> } navigateTo={'/west/'} />
                <ButtonMenu text={'Каталог'} icon={ <AiOutlineHome /> } navigateTo={'/west/catolog'} />
                <ButtonMenu text={'Головна'} icon={ <AiOutlineHome /> } navigateTo={'/west/'}/>
            </div>
        </div>
    </menu>
  )
}

export default Menu