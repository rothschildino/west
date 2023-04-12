import React from 'react'
import { ButtonMain } from '../Buttons/ButtonMain'

const Service = ({text}) => {
  return (
    <div className='service'>
      <div className='service_banner'>
      <h1>{text}</h1>
      <ButtonMain text={'Дізнатися більше'}/>
      </div>
      
    </div>
   )
}

export default Service