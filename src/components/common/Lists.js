import React, { Component } from 'react'
import styles from './Lists.module.css'

class Lists extends Component {
  constructor(props){
    super(props)
  } 
  render(){
    const {item} = this.props
    return (
      <div className={styles['page']}>
          <p># {item.num}</p>
          <p>{item.title}</p>
          <p>{item.name}</p>
          <p>{item.locate}</p>
          <p>{item.balans}</p>
          <button className={styles['delever']}>{item.order}</button>
          <button className={styles['nuqtalar']}><img src={item.image} alt="" /></button>
      </div>
    )
   }
}

export default Lists