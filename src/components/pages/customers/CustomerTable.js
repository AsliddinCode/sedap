import React from "react";
import styles from "@/styles/customers.module.css";
import CustomerData from "./CustomerData";
import { useRouter } from "next/navigation";

export default function CustomerTable() {
  return (
    <>
      <table className={styles["table"]}>
        <thead>
          <tr className={styles["tr"]}>
            <th className={styles["th"]}>
              <div>
                <p>Customer ID</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Join Date</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Customer Name</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Location</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Total Spent</p>
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
            <th className={styles["th"]}>
              <div>
                <p>Last Order</p>
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
          </tr>
        </thead>
        <tbody>
          <TableMap />
        </tbody>
      </table>
    </>
  );
}

function TableMap() {
  const route = useRouter();
  const goToDetails = (id) => {
    route.push(`/${id}`);
  };
  return (
    <>
      {CustomerData.map((item) => (
        <tr
          key={item.userId}
          className={styles["tr2"]}
          style={{ cursor: "pointer" }}
          onClick={() => goToDetails(item.userId)}
        >
          <td className={styles["td"]}>#C-{item.userId}</td>
          <td className={styles["td"]}>{item.date}</td>
          <td className={styles["td"]}>{item.userName}</td>
          <td className={styles["td"]}>{item.location}</td>
          <td className={styles["td1"]}>${item.amount}</td>
          <td className={styles["td12"]}>${item.lastAmount}</td>
        </tr>
      ))}
    </>
  );
}
