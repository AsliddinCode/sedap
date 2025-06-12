import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";

export default function Purchases() {
  const [cart, setCart] = useState([]);
  const [foodCount, setFoodCount] = useState(0);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    setFoodCount(totalCount);
  }, []);

  const handlePlusCount = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({ ...item, quantity: 1 });
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    const totalCount = cart.reduce((son, i) => son + i.quantity, 0);
    setFoodCount(totalCount);
    setCart(cart);
  };

  const handleMinusCount = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity -= 1;
      if (existing.quantity <= 0) {
        const newCart = cart.filter((i) => i.id !== item.id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        const totalCount = newCart.reduce((son, i) => son + i.quantity, 0);
        setFoodCount(totalCount);
        setCart(newCart);
        return;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    setFoodCount(totalCount);
    setCart(cart);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Savatcha</h2>
      {cart.length === 0 ? (
        <p>Savatcha bo‘sh</p>
      ) : (
        <Box sx={{ width: "100%" }}>
          {cart.map((item) => (
            <Box
              key={item.id}
              sx={{
                display: "flex",
                gap: "10px",
                padding: "20px",
                border: "1px solid rgb(216, 216, 216)",
                marginBottom: "10px",
                borderRadius: "16px",
              }}
            >
              <img
                src={item.image}
                style={{
                  minWidth: "250px",
                  minHeight: "150px",
                  maxHeight: "150px",
                  borderRadius: "8px",
                  objectFit: "cover",
                }}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                  }}
                >
                  <p style={{ fontSize: "32px" }}>{item.name}</p>
                  <p style={{ fontSize: "16px", color: "#00B074" }}>
                    {item?.type?.category.name} / {item?.type.name}
                  </p>
                </Box>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Button
                    onClick={() => handlePlusCount(item)}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      fontSize: "20px",
                      minWidth: 50,
                      backgroundColor: "#00B074",
                      color: "white",
                      minHeight: 30,
                      "&:hover": {
                        backgroundColor: "white",
                        border: "1px solid #00B074",
                        color: "#00B074",
                      },
                    }}
                  >
                    +
                  </Button>
                  <p style={{ margin: "0px 20px" }}>{item.quantity}</p>
                  <Button
                    onClick={() => handleMinusCount(item)}
                    sx={{
                      backgroundColor: "white",
                      borderRadius: "20px",
                      fontSize: "20px",
                      minWidth: 50,
                      minHeight: 30,
                      backgroundColor: "#FF5B5B",
                      color: "white",
                      "&:hover": {
                        backgroundColor: "white",
                        border: "1px solid #FF5B5B",
                        color: "#FF5B5B",
                      },
                    }}
                  >
                    -
                  </Button>
                </Box>
              </Box>
            </Box>
          ))}
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              sx={{
                padding: "15px 80px",
                backgroundColor: "#00B074",
                color: "white",
                borderRadius: "16px",
                "&:hover": {
                  backgroundColor: "white",
                  color: "#00B074",
                  border: "1px solid #00B074",
                  padding: "14px 79px",
                },
              }}
            >
              <SlBasket
                style={{ width: "20px", height: "20px", marginRight: "10px" }}
              />
              Buy
            </Button>
          </Box>
        </Box>
      )}
    </div>
  );
}