import React from 'react'
import styles from './menu.module.css'
import { useNavigate } from 'react-router-dom';

const ButtonMenu = ({text, icon, navigateTo}) => {

  const navigate = useNavigate();

  return (
    <a className={styles.button__icon} onClick={() => {navigate(navigateTo)}}>
        
          {icon}
        
        <p>{text}</p>
    </a>
  )
}

export default ButtonMenu 