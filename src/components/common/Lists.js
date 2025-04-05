import React from "react";
import styles from "./Lists.module.css";
import { useRouter } from "next/navigation";

function Lists(props) {
  const { item } = props;
  const router = useRouter();

  const goToDetails = (id) => {
    router.push(`/orders/${id}`);
  };

  return (
    <div className={`${styles["page"]}`}>
      <p style={{ cursor: "pointer" }} onClick={() => goToDetails(item.userId)}>
        # {item.userId}
      </p>
      <p>{item.date}</p>
      <p>{item.userName}</p>
      <p>{item.location}</p>
      <p>{item.amount}</p>
      <button className={styles["delever"]}>{item.status}</button>
      <button className={styles["nuqtalar"]}>
        ***
      </button>
    </div>
  );
}

export default Lists;
