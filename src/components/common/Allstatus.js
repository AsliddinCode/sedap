import React from "react";
import Status from "./Status";
import Calendar from "./Calendar";
import styles from '@/styles/order.module.css'
import PageTitle from "./PageTitle";


function Allstatus() {
  return (
    <div className={styles["orderDiv"]}>
    <PageTitle title="Your Orders" subtitle="This is your order list data" />
    <div className={styles["calendar"]}>
      <Status />
      <Calendar />
    </div>
  </div>
  );
}

export default Allstatus;
