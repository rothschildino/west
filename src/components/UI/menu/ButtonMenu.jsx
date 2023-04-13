import React from 'react'
import './menu.css'
import { useNavigate } from 'react-router-dom';

const ButtonMenu = ({text, icon, navigateTo}) => {

  const navigate = useNavigate();

  return (
    <a className='button__icon' onClick={() => {navigate(navigateTo)}}>
        {icon}
        <p>{text}</p>
    </a>
  )
}

export default ButtonMenu