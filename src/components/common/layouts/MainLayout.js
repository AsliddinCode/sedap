import React from "react";
import Head from "next/head";
import Navigation from "../Navigation";

function MainLayout(props) {
  return (
    <main
      style={{
        display: 'flex',
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