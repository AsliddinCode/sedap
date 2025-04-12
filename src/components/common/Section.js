import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/order.module.css'
import Table from '../pages/orders/Table'
import Allstatus from './Allstatus'

export default function Section() {
    return (
        <>
            <Head>
                <Link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
                />
            </Head>
            <div>
                <div className={styles["orderDiv"]}>
                    <Allstatus/>
                </div>
                <div className={'tableData'}>
                    <Table/>
                </div>
            </div>
        </>
    )
}
