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
      <p style={{ cursor: "pointer" }} onClick={() => goToDetails(item.num)}>
        # {item.num}
      </p>
      <p>{item.title}</p>
      <p>{item.name}</p>
      <p>{item.locate}</p>
      <p>{item.balans}</p>
      <button className={styles["delever"]}>{item.order}</button>
      <button className={styles["nuqtalar"]}>
        <img src={item.image} alt="" />
      </button>
    </div>
  );
}

export default Lists;
