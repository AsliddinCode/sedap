import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Head from "next/head";
import styles from "@/styles/Aside.module.css";
import Image from "next/image";
import { LuCircuitBoard } from "react-icons/lu";
import { CiBoxList } from "react-icons/ci";
import { PiHeadCircuitDuotone } from "react-icons/pi";

function Navigation() {
  const router = useRouter();

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: <LuCircuitBoard />,
      href: "/dashboard",
    },
    {
      id: 2,
      linkName: "Order List",
      linkImg: <CiBoxList />,
      href: "/orders",
    },
    {
      id: 4,
      linkName: "Customers",
      linkImg: <PiHeadCircuitDuotone />,
      href: "/customers",
    },
    {
      id: 5,
      linkName: "Foods",
      linkImg: <PiHeadCircuitDuotone />,
      href: "/foods",
    },
  ];
  return (
    <div>
      <Head />
      <aside style={{ height: "100%" }} className={styles["aside"]}>
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
        {linkImg}
        {linkName}
      </Link>
    </>
  );
}

export default Navigation;
