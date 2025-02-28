import React from 'react'
import styles from './StatCal.module.css'
function Status() {
  return (
    <div className={styles["select"]}>
      <div className={styles["selct-img"]}>
        <img className={styles["calendar"]} src="/status.png" alt="" />
        <select className={styles['selects']} name="All Status" id="">
          <option value="All Status">ALL Status</option>
        </select>
      </div>
    </div>
  )
}

export default Status