import React from 'react'
import styles from './banners.module.css'

function Banners() {
  return (
    <div className={styles.container}>
      <div className={styles.solid}>

        <h1>Найкращий циліндр року</h1>
        <div className={styles.image}>
          <img src="https://i.imgur.com/gxVyt6N.png" alt="" />
        </div>
        
      </div>

      { /* <div className={styles.btn}>
        <button>Перейти</button>s
      </div>
      */ }
      
    </div>
    
  )
}

export default Banners