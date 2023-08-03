import React from 'react'
import { ButtonMain } from '../Buttons/ButtonMain'
import styles from './service.module.css';

const Service = ({text}) => {
  return (
    <div className={styles.service}>
      <div className={styles.service_banner}>
        <h1>{text}</h1>
        <ButtonMain text={'Дізнатися більше'}/>
      </div>
      
    </div>
   )
}

export default Service