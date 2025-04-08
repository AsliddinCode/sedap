import React from "react";
import PageTitle from "@/components/common/PageTitle";
import CustomerTable from "./CustomerTable";
import styles from "@/styles/order.module.css";
import CustomerFilter from "./CustomerFilter";

export default function CustomersList() {
  return (
    <>
      <div className={styles["orderDiv"]}>
        <PageTitle
          title="General Customer"
          subtitle="Here is your general customers list data"
        />
        <div className={styles["calendar"]}>
          <CustomerFilter />
        </div>
      </div>
      <div className={"tableData"}>
        <CustomerTable />
      </div>
      {/* <PageTitle
        title="General Customer"
        subtitle="Here is your general customers list data"
      />
      <CustomerTable /> */}
    </>
  );
}
