import React from "react";
import styles from "../common/style/Table2.module.css";

function Table2({ items }) {
  return (
    <table className={styles["table"]}>
      <thead className={styles["thead"]}>
        <tr className={styles["tr"]}>
          <th style={{ width: "489px" }}>Items</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total Price</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <Row key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table2;

function Row({ item }) {
  return (
    <tr className={styles["tr"]}>
      <td className={styles["td"]} style={{ width: "489px" }}>
        <div className={styles["td1"]}>
          <img src={item.img} alt={item.name} className={styles["img"]} />
          <div className={styles["title"]}>
            <strong>{item.name}</strong>
            <p>{item.text}</p>
          </div>
        </div>
      </td>
      <td className={styles["td"]} style={{ textAlign: "center" }}>{item.x}</td>
      <td className={styles["td"]} style={{ textAlign: "center" }}>${item.cost}</td>
      <td className={styles["td"]} style={{ textAlign: "center" }}>
        ${(item.x * item.cost)}
      </td>
      <td className={styles["td"]}>
        <div className={styles["action"]}>
          <button className={styles["btn"]}>
            <img src="/ignore.png" alt="Remove" />
          </button>
        </div>
      </td>
    </tr>
  );
}
