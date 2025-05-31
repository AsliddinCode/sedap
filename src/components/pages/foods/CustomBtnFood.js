import React from "react";
import Image from "next/image";

function CustomBtn(props) {
  const { back, icon } = props;
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "60px",
          maxHeight: "60px",
          borderRadius: "18px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "16px",
          backgroundColor: back,
        }}
      >
        <button style={{
          overflow:'hidden',
          border:'none',
          backgroundColor:'unset',
          color:'white',
        }} >Click</button>
      </div>
      <p
        style={{
          fontWeight: "500",
          fontSize: "18px",
          lineHeight: "100%",
          color: "#464255",
        }}
      ></p>
    </div>
  );
}

export default CustomBtn;