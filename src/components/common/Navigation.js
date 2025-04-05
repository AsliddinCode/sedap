import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Navigate.module.css";
import Image from "next/image";

function Navigation() {
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
      linkName: "Reviews",
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
      linkName: "Chat",
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
        <labelink
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;700&display=swap"
        />
      </Head>

      <aside className={styles["aside"]}>
        <div className={styles["aside-header"]}>
          <Image
            src="/Sedap.png"
            alt="Logo"
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
          {page.map(({ id, linkName, linkImg, linkHref }) => (
            <Links
              key={id}
              linkName={linkName}
              linkImg={linkImg}
              linkHref={linkHref}
            />
          ))}
        </div>
        <div className={styles["addMenus"]}>
          <div className={styles["addMenusText"]}>
            <p>Please, organize your menus through button below!</p>
            <button>+Add Menus</button>
          </div>
          <Image src="/illustration.png" alt="" width={77} height={91} />
        </div>
        <div className={styles["about"]}>
          <p>Sedap Restaurant Admin Dashboard</p>
          <p>© 2020 All Rights Reserved</p>
          <p>Made with ♥ by Peterdraw</p>
        </div>
      </aside>
    </div>
  );
}

export default Navigation;

function Links({ linkName, linkImg, linkHref }) {
  const router = useRouter();
  const isActive = router.asPath === linkHref;

  return (
    <Link
      href={linkHref}
      className={`${isActive ? styles.active : ""}`}
      style={{
        background: isActive ? "#00B07426" : "",
        color: isActive ? "#177556" : "",
      }}
    >
      <Image src={linkImg} alt={linkName} width={24} height={24} />
      {linkName}
    </Link>
  );
}
