import React from "react";
import styles from "@/styles/order.module.css";

function CustomerFilter() {
  return (
    <div>
      <div className={styles["status"]}>
        <img src="./allstatus.png" />
        <select>
          <option>Filter</option>
          <option>Name</option>
          <option>ID</option>
        </select>
      </div>
    </div>
  );
}

export default CustomerFilter;
