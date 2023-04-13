import React from 'react'
import './menu.css'
import ButtonMenu from './ButtonMenu'
import { AiOutlineHome } from "react-icons/ai";

const Menu = ({name}) => {
  return (
    <menu className='menu'>
        <div className="container">
            <div className='menu_body'>
                <ButtonMenu text={'Головна'} icon={ <AiOutlineHome /> }/>
                <ButtonMenu text={'Головна'} icon={ <AiOutlineHome /> }/>
                <ButtonMenu text={'Головна'} icon={ <AiOutlineHome /> }/>
            </div>
        </div>
    </menu>
  )
}

export default Menu