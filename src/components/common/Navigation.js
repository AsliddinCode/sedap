import React from "react";
import Link from "next/link";
import AccountBalanceWalletRoundedIcon from "@mui/icons-material/AccountBalanceWalletRounded";
import { useRouter } from "next/router";
import Head from "next/head";
import HomeSharpIcon from "@mui/icons-material/HomeSharp";
import FormatListBulletedTwoToneIcon from "@mui/icons-material/FormatListBulletedTwoTone";
import SupportAgentTwoToneIcon from "@mui/icons-material/SupportAgentTwoTone";
import styles from "@/styles/Aside.module.css";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import AnalyticsOutlinedIcon from "@mui/icons-material/AnalyticsOutlined";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import Image from "next/image";

function Navigation() {
  const router = useRouter();

  const links = [
    {
      id: 1,
      linkName: "Dashboard",
      linkImg: <HomeSharpIcon />,
      href: "/dashboard",
    },
    {
      id: 2,
      linkName: "Bucket",
      linkImg: <FormatListBulletedTwoToneIcon />,
      href: "/bucket",
    },
    {
      id: 4,
      linkName: "Customers",
      linkImg: <SupportAgentTwoToneIcon />,
      href: "/customers",
    },
    {
      id: 5,
      linkName: "Foods",
      linkImg: <FastfoodIcon />,
      href: "/foods",
    },
    {
      id: 6,
      linkName: "Categoris",
      linkImg: <AnalyticsOutlinedIcon />,
      href: "/category",
    },
    {
      id: 7,
      linkName: "Type",
      linkImg: <CalendarMonthIcon />,
      href: "/type",
    },
    {
      id: 8,
      linkName: "Chat",
      linkImg: <ChatOutlinedIcon />,
      href: "#",
    },
    {
      id: 9,
      linkName: "Wallet",
      linkImg: <AccountBalanceWalletRoundedIcon />,
      href: "#",
    },
  ];
  return (
    <div>
      <Head />
      <aside style={{ height: "100%" }} className={styles["aside"]}>
        <div className={styles["aside-header"]}>
          <Image
            src="/sedap.png"
            alt="Sedap"
            className={styles["logo"]}
            width={167}
            height={49}
            priority
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
        <span
          style={{
            marginRight: "10px",
          }}
        >
          {linkImg}
        </span>
        {linkName}
      </Link>
    </>
  );
}

export default Navigation;
