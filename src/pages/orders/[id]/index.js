import { orderListData } from "@/data";
import MainLayout from "@/components/common/layouts/MainLayout";
import styles from "../../../styles/orderDetail.module.css";
import Allstatus from "@/components/common/Allstatus";
import Button from "@/components/common/Button";
import Table2 from "@/components/common/Table2";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";

function OrderDetail() {
  const router = useRouter();
  const [currentOrder, setCurrentOrder] = useState(null);
  const [tableItems, setTableItems] = useState([]);

  useEffect(() => {
    if (router.query.id) {
      const orderItem = orderListData.find((o) => o.id === router.query.id);
      if (orderItem) {
        setCurrentOrder(orderItem);
        setTableItems(orderItem.items);
      }
    }
  }, [router.query.id]);

  console.log("OrderDetail", currentOrder);

  return (
    <>
      <Head>
        <title>
          {currentOrder
            ? "Order Detail: " + currentOrder.id
            : "Tovar not found"}
        </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles['container']}>
      <Allstatus id={`Order ID: ${currentOrder?.id}`} />  
      <div className={styles["orderDetail"]}>
        <div className={styles['user']}>
          <div className={styles["profil"]}>
            <div className={styles["icon"]}>
              <img
                style={{ width: "160px", height: "160px" }}
                src="/placeholder.png"
                alt="Use  r"
              />
              <h1>{currentOrder?.userName}</h1>
              <Button Customers={"Customers"} />
            </div>
            <div className={styles["text"]}>
              <div className={styles["info"]}>
                <h1>Note Order</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor magna aliqua.
                </p>
              </div>
              <div className={styles["dastabka"]}>
                <div className={styles["iconCircle"]}>
                  <img src="/delivir.png" alt="Delivery" />
                </div>
                <p>{currentOrder?.location}</p>
              </div>
            </div>
          </div>
          
        </div>
        <div className={styles["items"]}>
          <Table2 items={tableItems} />
          <div className={styles["row"]}>
            <div className={styles["map"]}></div>
            <div className={styles["delevir"]}>
              <h3>Delivery By</h3>
              <div className={styles["delvir"]}>
                <div className={styles["set1"]}>
                  <img src={currentOrder?.deliveryBy.img} alt="" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "30px",
                    }}
                  >
                    <h3>{currentOrder?.deliveryBy.name}</h3>
                    <p>ID- {currentOrder?.deliveryBy.id}</p>
                  </div>
                </div>
                <div className={styles["set2"]}>
                  <button className={styles["btn"]}>telphone </button>
                  <button className={styles["btn"]}>click </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}

OrderDetail.getLayout = (pageProps) => (
  <MainLayout>
    <OrderDetail {...pageProps} />
  </MainLayout>
);

export default OrderDetail;
