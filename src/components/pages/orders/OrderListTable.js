import React from "react";
import styles from "./OrderListTabel.module.css";
import Lists from "@/components/common/Lists";
import Data from "@/components/page/Data";

function OrderListTable() {
  return (
    <div>
      <div className={styles["rectangle"]}>
        <div className={styles["rec-select"]}>
          <select className={styles["selct"]} name="" id="">
            <option value="">Order</option>
          </select>
          <select className={styles["selct-date"]} name="" id="">
            <option value="Data">Data</option>
          </select>
        </div>
        <div className={styles["rec-select"]}>
          <select className={styles["selct"]} name="" id="">
            <option value="Order">Order</option>
          </select>
          <select className={styles["selct-date"]} name="" id="">
            <option value="Data">Data</option>
          </select>
        </div>
        <div className={styles["rec-select"]}>
          <select className={styles["selct"]} name="" id="">
            <option value="Order">Order</option>
          </select>
          <select className={styles["selct-date"]} name="" id="">
            <option value="Data">Data</option>
          </select>
        </div>
      </div>

      <div className={styles["lists"]}>
        {Data.map((item) => {
          return <Lists key={item.userId} item={item} />;
        })}
      </div>

      <div className={styles["showing"]}>
        <p>Showing 12 from 46 data</p>
        <div className={styles["btn-num"]}>
          <button className={styles["btn"]}>
            <img src="/chap.png" alt="" />
          </button>
          <button className={styles["btn"]}>1</button>
          <button className={styles["btn"]}>2</button>
          <button className={styles["btn"]}>3</button>
          <button className={styles["btn"]}>4</button>
          <button className={styles["btn"]}>
            <img src="/ung.png" alt="" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default OrderListTable;
