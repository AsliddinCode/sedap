import React, { use, useEffect, useState } from "react";
import Head from "next/head";
import Navigation from "../Navigation";
import { useRouter } from "next/router";

function MainLayout(props) {
  <main
    style={{
      display: "flex",
      minHeight: "100vh",
      minWidth: "100vw",
    }}
  >
    <div>
      <Navigation />
    </div>
    <div>{props.children}</div>
  </main>;
}

export default MainLayout;
