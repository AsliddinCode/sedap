import React from 'react'
import styles from '../common/style/Button.module.css'

function Button(props) {
  const {Customers} = props
  return (
    <button className={styles['btn']}>{Customers}</button>
  )
}

export default Button