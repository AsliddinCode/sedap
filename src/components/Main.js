import React from "react";
import Head from "next/head";
import Navigation from "./common/Navigation";

function MainLayout(props) {
  return (
    <main
      style={{
        display: 'flex',
        minHeight: '100vh',
        minWidth: '100vw',
      }}
    >
      <div>
        <Navigation/>
      </div>
      <div>{props.children}</div>
    </main>
  );
}

export default MainLayout;