import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Navigate.module.css";
import Image from "next/image";

function Navigation() {
  const router = useRouter();
  console.log("router", router.asPath);

  const page = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: "/home.png",
      linkHref: "/",
    },
    {
      id: 2,
      linkName: "Order List",
      linkImg: "/list.png",
      linkHref: "/orders",
    },
    {
      id: 3,
      linkName: "Order Detail",
      linkImg: "/order.png",
      linkHref: "#",
    },
    {
      id: 4,
      linkName: "Customers",
      linkImg: "/customer.png",
      linkHref: "#",
    },
    {
      id: 5,
      linkName: "Analytics",
      linkImg: "/analis.png",
      linkHref: "#",
    },
    {
      id: 6,
      linkName: "Reivews",
      linkImg: "/review.png",
      linkHref: "#",
    },
    {
      id: 7,
      linkName: "Foods",
      linkImg: "/food.png",
      linkHref: "#",
    },
    {
      id: 8,
      linkName: "Foods Details",
      linkImg: "/foodDetail.png",
      linkHref: "#",
    },
    {
      id: 9,
      linkName: "Customers Detail",
      linkImg: "/customerDetail.png",
      linkHref: "#",
    },
    {
      id: 10,
      linkName: "Calendar",
      linkImg: "/calendar.png",
      linkHref: "#",
    },
    {
      id: 11,
      linkName: "chat",
      linkImg: "/chat.png",
      linkHref: "#",
    },
    {
      id: 12,
      linkName: "Wallet",
      linkImg: "/wallet.png",
      linkHref: "#",
    },
  ];

  return (
    <div>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
        />
      </Head>

      <aside className={styles["aside"]}>
        <div className={styles["aside-header"]}>
          <image src="/Sedap.png" alt="" className={styles["logo"]} />
          <p
            style={{
              color: "#B9BBBD",
              fontSize: "18px",
              backgroundColor: "unset",
            }}
          >
            Modern Admin Dashboard
          </p>
        </div>
        <div className={styles["buttonsMenu"]}>
          {page.map(({ id, linkName, linkImg, linkHref }) => {
            return (
              <Links
                key={id}
                linkName={linkName}
                linkImg={linkImg}
                linkHref={linkHref}
              />
            );
          })}
        </div>
        <div className={styles["addMenus"]}>
          <div className={styles["addMenusText"]}>
            <p>Please, organize your menus through button below!</p>
            <button>+Add Menus</button>
          </div>
          <image src="/illustration.png" alt="" />
        </div>
        <div className={styles["about"]}>
          <p>Sedap Restaurant Admin Dashboard</p>
          <p>© 2020 All Rights Reserved</p>
          <p>Made with ♥ by Peterdraw</p>
        </div>
      </aside>
      {/* <Section/> */}
    </div>
  );
}

export default Navigation;

function Links(props) {
  const { linkName, linkImg, linkHref } = props;
  const router = useRouter();
  return (
    <Link
      className={`${router.asPath === linkHref ? styles.active : ""}`}
      href={linkHref}
      style={{
        background: router.asPath === linkHref ? "#00B07426" : "",
        color: router.asPath === linkHref ? "#177556" : "",
      }}
    >
      <image src={linkImg} alt={linkName} />
      {linkName}
    </Link>
  );
}
