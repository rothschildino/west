import React from 'react'
import './menu.css'

const ButtonMenu = ({text, icon}) => {
  return (
    <div className='button__icon'>
        {icon}
        <p>{text}</p>
    </div>
  )
}

export default ButtonMenu