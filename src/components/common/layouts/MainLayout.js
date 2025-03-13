import React from "react";
import Head from "next/head";
import Navigation from "@/components/common/Navigation";
import { useRouter } from "next/router";

function MainLayout(props) {
const router = useRouter()
  return (
    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <div>
        <Navigation router={router}/>
      </div>
      <div>{props.children}</div>
    </main>
  );
}

export default MainLayout;