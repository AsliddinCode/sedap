import React, { Component } from 'react'
import styles from './PageTitle.module.css'
                                                                                                                      
class PageTitle extends Component {
  constructor (props){
    super(props)
  }
  render(){
    const {title, subtitle} = this.props
    return (
      <div>
          <h1 className={styles['your']}>{title}</h1>
          <p className={styles['this']}> {subtitle}</p>
      </div>
    )
  }
}

export default PageTitle