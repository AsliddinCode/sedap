import Image from "next/image";
import React from "react";

function Table2({ items }) {
  return (
    <table
      style={{
        width: "1089px",
        borderCollapse: "collapse",
        overflow: "hidden",
        borderRadius: "16px",
      }}
    >
      <thead
        style={{
          width: "100%",
          height: "83px",
          color: "white",
          backgroundColor: "#00b074",
          borderRadius: "16px",
        }}
      >
        <tr>
          <th style={{ width: "489px", borderTopLeftRadius: "16px" }}>Items</th>
          <th>Qty</th>
          <th>Price</th>
          <th>Total Price</th>
          <th style={{ borderTopRightRadius: "16px" }}></th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <Row key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
}

export default Table2;

function Row({ item }) {
  return (
    <tr>
      <td style={{ width: "489px", paddingBottom: "16px" }}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-evenly",
          }}
        >
          <Image
            src={item.img}
            alt={item.name}
            style={{
              width: "80px",
              height: "80px",
            }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              paddingLeft: "19px",
            }}
          >
            <strong>{item.name}</strong>
            <p>{item.text}</p>
          </div>
        </div>
      </td>
      <td style={{ textAlign: "center", paddingBottom: "16px" }}>{item.x}</td>
      <td style={{ textAlign: "center", paddingBottom: "16px" }}>
        ${item.cost}
      </td>
      <td style={{ textAlign: "center", paddingBottom: "16px" }}>
        ${item.x * item.cost}
      </td>
      <td style={{ paddingBottom: "16px" }}>
        <div>
          <button
            style={{
              width: "20px",
              height: "20px",
              color: "red",
              border: "none",
              backgroundColor: "unset",
            }}
          >
            <Image width={20} height={20} src="/ignore.png" alt="Remove" />
          </button>
        </div>
      </td>
    </tr>
  );
}
