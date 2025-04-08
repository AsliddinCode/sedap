import React from "react";
import styles from "@/styles/order.module.css";
import orderListData from "./Data";
import { useRouter } from "next/router";

export default function Table() {
  const columns = [
    {
      id: "0",
      name: "Order ID",
    },
    {
      id: "1",
      name: "Date",
    },
    {
      id: "2",
      name: "Customer Name",
    },
    {
      id: "3",
      name: "Location",
    },
    {
      id: "4",
      name: "Amount",
    },
    {
      id: "5",
      name: "Status Order",
    },
  ];

  return (
    <table className={styles["orderTable"]}>
      <thead>
        <tr className={styles["tr"]}>
          {columns.map((col) => (
            <TableHead key={col.id} name={col.name} />
          ))}
        </tr>
      </thead>
      <tbody>
        {orderListData.map((item) => (
          <TableRow key={item.userId} item={item} />
        ))}
      </tbody>
    </table>
  );
}

function TableHead({ name }) {
  return (
    <th className={styles["th"]}>
      <div>
        <p>{name}</p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "10px",
          }}
        >
          <img src="./Vector1.png" />
          <img src="./Vector2.png" />
        </div>
      </div>
    </th>
  );
}

function TableRow(props) {
  const { item } = props;
  return (
    <tr
      className={styles["tr"]}
      style={{ cursor: "pointer" }}
      onClick={() => goToDetails(item.userId)}
    >
      <td className={styles["td"]}>#{item.userId}</td>
      <td className={styles["td"]}>{item.date}</td>
      <td className={styles["td"]}>{item.userName}</td>
      <td className={styles["td"]}>{item.location}</td>
      <td className={styles["td"]}>${item.amount}</td>
      <td className={styles["td"]}>
        {item.status === "On Delivery" ? (
          <div className={styles["onDelivery"]}>{item.status}</div>
        ) : (
          ""
        )}
        {item.status === "New Order" ? <div className={styles["newOrder"]}>{item.status}</div> : ""}
        {item.status === "Delivered" ? (
          <div className={styles["delivered"]}>{item.status}</div>
        ) : (
          ""
        )}
      </td>
    </tr>
  );
}
