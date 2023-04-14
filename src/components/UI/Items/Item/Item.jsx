import React from 'react'
import styles from './Item.module.css'

const Item = () => {

    const urlPhoto = 'https://i0.wp.com/www.hydrohouse.ua/wp-content/uploads/2022/01/zahlush.png?resize=300%2C300&ssl=1'

  return (
    <div className={styles.Item}>
        <div className="container">
            <div className={styles.item__body}>
                <div className={styles.photo}>
                <img src={urlPhoto} alt="" />
                </div>
                <div className={styles.text}>
                <p>Не знаю що це, але дуже цікаво.Тут має бути дуже багато тексту</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Item