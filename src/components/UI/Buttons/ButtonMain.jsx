import React from 'react'
import './ButtonMain.css'


export const ButtonMain = ({text, icon}) => {
  return (
    <button className='btn-main'>
      {icon} {text}
    </button>
  )
}
