import React, { useEffect } from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import { useRouter } from "next/router";
import Search from "../Search";
import useCurrentUser from "@/hooks/useCurrentUser";

function MainLayout(props) {
  const router = useRouter();
  const user = useCurrentUser();

  useEffect(() => {
    if (user && !user.restaurantId) {
      router.push("/client");
    }
  }, [user, router]);

  return (
    <main
      style={{
        display: "flex",
        maxWidth: "1920px",
        width: "100%",
        margin: "0 auto",
        minHeight: "100vh",
      }}
    >
      <div style={{ display: "flex", minWidth: "100wh" }}>
        {user?.restaurantId && <Navigation />}
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
