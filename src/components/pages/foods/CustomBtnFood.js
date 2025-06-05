import React from "react";

function CustomBtn(props) {
  const { back, icon, onClick } = props;
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
        <button onClick={onClick} style={{
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