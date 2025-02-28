import React from 'react'
import styles from './PageTitle.module.css'
function PageTitle(props) {
    const {title, subtitle} = props
  return (
    <div>
        <h1 className={styles['your']}>{title}</h1>
        <p className={styles['this']}> {subtitle}</p>
    </div>
  )
}

export default PageTitle