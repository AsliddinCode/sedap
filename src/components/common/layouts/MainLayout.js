import React, { useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import { useRouter } from "next/router";
import Search from "../Search";

function MainLayout(props) {
  const router = useRouter();

  // useEffect(() => {
  //   if (typeof window !== "undefined") {
  //     const testUser = localStorage.getItem("user");
  //     if (!testUser) {
  //       // router.push("/auth/login");
  //     }
  //   }
  // }, [router]);

  return (
    <main
      style={{
        display: "flex",
        maxWidth: "1920px",
        width: "100%",
        margin: "0 auto",
        minHeight: "100vh",
        // minWidth: "100vw",
      }}
    >
      <div style={{ display: "flex", minWidth: "100wh" }}>
        <Navigation />
      </div>

      <div
        style={{
          width: "100%",
          padding: "47px 50px",
        }}
      >
        <Search />
        {props.children}
      </div>
    </main>
  );
}

export default MainLayout;