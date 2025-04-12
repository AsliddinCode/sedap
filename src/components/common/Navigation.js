import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Aside.module.css";
import Image from "next/image";

function Navigation() {
  const router = useRouter();

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: "/home.png",
      href: "/dashboard",
    },
    {
      id: 2,
      linkName: "Order List",
      linkImg: "/list.png",
      href: "/orders",
    },
    {
      id: 4,
      linkName: "Customers",
      linkImg: "/customer.png",
      href: "/customers",
    },
    {
      id: 5,
      linkName: "Analytics",
      linkImg: "/analis.png",
      href: "/analis",
    },
    {
      id: 6,
      linkName: "Review",
      linkImg: "/review.png",
      href: "/review",
    },
    {
      id: 7,
      linkName: "Foods",
      linkImg: "/food.png",
      href: "/food",
    },
    {
      id: 8,
      linkName: "Food Detail",
      linkImg: "/foodDetail.png",
      href: "/foodDetail",
    },
    {
      id: 9,
      linkName: "Customer Detail",
      linkImg: "/customerDetail.png",
      href: "/customerDetail",
    },
    {
      id: 10,
      linkName: "Calendar",
      linkImg: "/calendar.png",
      href: "/calendar",
    },
    {
      id: 11,
      linkName: "Chat",
      linkImg: "/chat.png",
      href: "/chat",
    },
    {
      id: 12,
      linkName: "Wallet",
      linkImg: "/wallet.png",
      href: "/wallet",
    },
  ];
  return (
    <div>
      <Head />
      <aside className={styles["aside"]}>
        <div className={styles["aside-header"]}>
          <Image src="/Sedap.png" alt="" className={styles["logo"]} width={167} height={49} />
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
          {links.map(({ id, href, linkName, linkImg }) => {
            const active = router.pathname.startsWith(href);
            return (
              <CustomLink
                key={id}
                linkName={linkName}
                linkImg={linkImg}
                href={href}
                active={active}
              />
            );
          })}
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
    </div>
  );
}

function CustomLink(props) {
  const { linkName, linkImg, href, active } = props;
  return (
    <>
      <Link
        className={`${active ? styles.active : ""}`}
        href={href}
        style={{
          background: active ? "#00B07426" : "",
          color: active === href ? "#177556" : "",
        }}
      >
        <Image src={linkImg} alt={linkName} width={20} height={20} />
        {linkName}
      </Link>
    </>
  );
}

export default Navigation;