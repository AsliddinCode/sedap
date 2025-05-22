import React, { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import SearchBtn from "./SearchBtn";
import { useRouter } from "next/router";
import { useMediaQuery } from "@mui/material";
import UserMenu from "./UserMenu";

function Search() {
  const router = useRouter();
  const isXLargeScreen = useMediaQuery("(min-width:1800px)");

  const [user, setUser] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  // Foydalanuvchini localStorage dan olish
  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      }
    }
  }, []);

  // Logout funksiyasi
  const handleLogOut = useCallback(() => {
    localStorage.removeItem("user");
    localStorage.removeItem("jwt");
    router.replace("/auth/login");
  }, [router]);

  const btnArr = [
    { id: 1, img: "/searchLogo.png", num: 2, back: "#2D9CDB26" },
    { id: 2, img: "/bell.png", num: 7, back: "#2D9CDB26" },
    { id: 3, img: "/prise.png", num: 1, back: "#5E6C9326" },
    { id: 4, img: "/setting.png", num: 3, back: "#FF5B5B26" },
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "25px",
        width: "100%",
        marginBottom: "40px",
      }}
    >
      {/* Search input */}
      <div
        style={{
          position: "relative",
          width: "58%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid #ebebeb",
          borderRadius: "8px",
        }}
      >
        <input
          placeholder="Search here"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            width: "100%",
            borderRadius: "8px",
            border: "none",
            padding: "15px 28px",
            fontWeight: 400,
            fontSize: "16px",
          }}
        />
        <Image
          src="/searchLogo.png"
          alt="search icon"
          width={24}
          height={24}
          style={{
            position: "absolute",
            backgroundColor: "white",
            padding: "2px",
            right: "28px",
          }}
        />
      </div>

      {/* Icon tugmalar (faqat katta ekranlarda) */}
      {isXLargeScreen && (
        <div style={{ display: "flex", gap: "15px" }}>
          {btnArr.map((item) => (
            <SearchBtn key={item.id} img={item.img} num={item.num} back={item.back} />
          ))}
        </div>
      )}

      {/* Chiziq ajratuvchi */}
      <hr
        style={{
          width: "1px",
          height: "56px",
          borderRadius: "8px",
          background: "#d0d6de",
        }}
      />

      {/* Foydalanuvchi menyusi */}
      <div
        style={{
          display: "flex",
          alignItems: "center",

        }}
      >
        <h3
          style={{
            fontWeight: "600",
            fontSize: "16px",
            lineHeight: "100%",
            margin: 0,
          }}
        >
          <span style={{ fontWeight: "400" }}>Mr</span>. {user?.username || "Guest"}
        </h3>

        <UserMenu
          logOut={handleLogOut}
          avatar={user?.avatar}
          style={{
            background: "#c4c4c4",
            border: "4px solid #ffffff",
            padding: "27px 20px",
            borderRadius: "50%",
          }}
        />
      </div>
    </div>
  );
}

export default Search;
