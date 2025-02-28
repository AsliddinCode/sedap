import React from 'react'
import styles from './Lists.module.css'

function Lists(props) {
    const {item} = props
  return (
    <div className={styles['page']}>
        <p># {item.num}</p>
        <p>{item.title}</p>
        <p>{item.name}</p>
        <p>{item.locate}</p>
        <p>{item.balans}</p>
        <button className={styles['delever']}>{item.order}</button>
        <img src={item.image} alt="" />
    </div>
  )
}

export default Lists