import React from 'react'
import styles from './service.module.css'
import Service from './Service'

const Services = ({textMain}) => {
  return (
    <menu className={styles.services}>
      <div className={styles.container}>
        <h1>{textMain}</h1>
        <div className={styles.services_body}>
          <Service text={'Ремонт циліндрів'}/>
          <Service text={'Шланги'}/>
          <Service text={'Сервіс'}/>
        </div>
      </div>
      
    </menu>
  )
}

export default Services