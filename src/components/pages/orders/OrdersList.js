import PageTitle from "@/components/common/PageTitle";
import React from "react";
import styles from "./OrderLIst.module.css";
import Status from "@/components/common/Status";
import Calendar from "@/components/common/Calendar";
import OrderListTable from "./OrderListTable";

function OrdersList() {
  return (
    <div className={styles['body']}>
      <div className={styles['main']}>
      <div className={styles["page-order"]}>
        <PageTitle
          title={"Your Orders"}
          subtitle={"This is your order list data"}
        />
        <div className={styles["data"]}>
          <Status />
          <Calendar />
        </div>
      </div>
      <div className="table">
        <OrderListTable />
      </div>
      </div>
    </div>
  );
}

export default OrdersList;
