import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Aside.module.css";
import Section from "./Section";
import Image from "next/image";

function Navigation(props) {
  const router = useRouter();
  console.log("router", router.asPath);

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: "/home.png",
      href: "/",
      active: true,
    },
    {
      id: 2,
      linkName: "Order List",
      linkImg: "/list.png",
      href: "/orders",
      active: true,
    },
    {
      id: 3,
      linkName: "Order Detail",
      linkImg: "/order.png",
      href: "/orderDetail",
      active: true,
    },
    {
      id: 4,
      linkName: "Customers",
      linkImg: "/customer.png",
      href: "/customers",
      active: true,
    },
    {
      id: 5,
      linkName: "Analytics",
      linkImg: "/analis.png",
      href: "/analis",
      active: true,
    },
    {
      id: 6,
      linkName: "Review",
      linkImg: "/review.png",
      href: "/review",
      active: true,
    },
    {
      id: 7,
      linkName: "Foods",
      linkImg: "/food.png",
      href: "/food",
      active: true,
    },
    {
      id: 8,
      linkName: "Food Detail",
      linkImg: "/foodDetail.png",
      href: "/foodDetail",
      active: true,
    },
    {
      id: 9,
      linkName: "Customer Detail",
      linkImg: "/customerDetail.png",
      href: "/customerDetail",
      active: true,
    },
    {
      id: 10,
      linkName: "Calendar",
      linkImg: "/calendar.png",
      href: "/calendar",
      active: true,
    },
    {
      id: 11,
      linkName: "Chat",
      linkImg: "/chat.png",
      href: "/chat",
      active: true,
    },
    {
      id: 12,
      linkName: "Wallet",
      linkImg: "/wallet.png",
      href: "/wallet",
      active: true,
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
          <Image
            src="/Sedap.png"
            alt=""
            className={styles["logo"]}
            width={167}
            height={49}
          />
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
          {links.map(({ id, href, linkName, linkImg, active }) => (
            <Links
              key={id}
              linkName={linkName}
              linkImg={linkImg}
              href={href}
              active={active}
            />
          ))}
        </div>
        <div className={styles["addMenus"]}>
          <div className={styles["addMenusText"]}>
            <p>Please, organize your menus through button bellow!</p>
            <button>+Add Menus</button>
          </div>
          <img src="./illustration.png" alt="" />
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

function Links(props) {
  const { linkName, linkImg, href, active } = props;
  const router = useRouter();
  return (
    <>
      <Link
        className={`${router.asPath === href ? styles.active : ""}`}
        href={href}
        style={{
          background: router.asPath === href ? "#00B07426" : "",
          color: router.asPath === href ? "#177556" : "",
        }}
      >
        <Image src={linkImg} alt={linkName} width={20} height={20} />
        {linkName}
      </Link>
    </>
  );
}

export default Navigation;
