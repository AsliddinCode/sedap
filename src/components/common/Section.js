import React from "react";
import Head from "next/head";
import Table from "../pages/orders/Table"; 
import Allstatus from "./Allstatus"; 

export default function Section() {
  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontFamily: '"Barlow", sans-serif',
            marginBottom: "40px",
          }}
        >
          <Allstatus id="Order List" />
        </div>

        <div className="tableData">
          <Table />
        </div>
      </div>
    </>
  );
}
