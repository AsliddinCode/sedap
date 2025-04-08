import React from 'react'
import styles from '@/styles/order.module.css'

function Status() {
    return (
        <div>
            <div className={styles['status']}>
                <img src='./allstatus.png'/>
                <select>
                    <option>All Status</option>
                    <option>All Status1</option>
                </select>
            </div>
        </div>
    )
}

export default Status
