import Image from "next/image";
import React from "react";


function Status(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center", 
          height: "68px",
          backgroundColor: "white",
          borderRadius: "12px", 
          boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)", 
          padding: "0 10px", 
        }}
      >
        {/* <Image src="./allstatus.png" alt="status icon" style={{ marginRight: "10px", width:'15px', height:"15px" }} /> */}
        <select
          style={{
            outline: "none",
            border: "none",
            fontSize: "16px",
            backgroundColor: "transparent",
            fontFamily: "inherit", 
          }}
        >
          <option>All Status</option>
          <option>All Status1</option>
        </select>
      </div>
    </div>
  );
}

export default Status;

