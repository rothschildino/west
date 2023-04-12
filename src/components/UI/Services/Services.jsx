import React from 'react'
import './service.css'
import Service from './Service'

const Services = ({textMain}) => {
  return (
    <menu className='services'>
      <div className='container'>
        <h1>{textMain}</h1>
        <div className='services_body'>
          <Service />
          <Service />
          <Service />
        </div>
      </div>
      
    </menu>
  )
}

export default Services