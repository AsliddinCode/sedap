import { Box, Button, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { SlBasket } from "react-icons/sl";

export default function Purchases(props) {
  const { foodsByCat } = props;
  const [cart, setCart] = useState([]);
  const [foodCount, setFoodCount] = useState(0);

  useEffect(() => {
    const loadCart = () => {
      const saved = JSON.parse(localStorage.getItem("cart")) || [];
      setCart(saved);
    };
    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, [foodsByCat]);

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
    setCart(cart);
    setFoodCount(cart.reduce((sum, i) => sum + i.quantity, 0));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleMinusCount = (item) => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existing = cart.find((i) => i.id === item.id);
    if (existing) {
      existing.quantity -= 1;
      if (existing.quantity <= 0) {
        const newCart = cart.filter((i) => i.id !== item.id);
        localStorage.setItem("cart", JSON.stringify(newCart));
        setCart(newCart);
        setFoodCount(newCart.reduce((sum, i) => sum + i.quantity, 0));
        return;
      }
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    setCart(cart);
    setFoodCount(cart.reduce((sum, i) => sum + i.quantity, 0));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <Box sx={{ padding: "24px" }}>
      <Typography variant="h5" fontWeight={600} mb={3}>
        Savatcha
      </Typography>

      {cart.length === 0 ? (
        <Typography color="text.secondary">Savatcha bo‘sh</Typography>
      ) : (
        <>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {cart.map((item) => (
              <Box
                key={item.id}
                sx={{
                  display: "flex",
                  gap: "16px",
                  padding: "16px",
                  border: "1px solid #e0e0e0",
                  borderRadius: "12px",
                  backgroundColor: "#fff",
                }}
              >
                <Box
                  component="img"
                  src={item.image}
                  alt={item.name}
                  sx={{
                    width: "120px",
                    height: "100px",
                    objectFit: "cover",
                    borderRadius: "10px",
                    flexShrink: 0,
                  }}
                />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    flexGrow: 1,
                  }}
                >
                  <Box>
                    <Typography variant="h6" fontWeight={600}>
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="primary">
                      {item?.type?.category.name} / {item?.type.name}
                    </Typography>
                  </Box>

                  <Box sx={{ display: "flex", alignItems: "center", mt: 1 }}>
                    <Button
                      onClick={() => handleMinusCount(item)}
                      sx={{
                        minWidth: 36,
                        minHeight: 36,
                        borderRadius: "50%",
                        backgroundColor: "#FF5B5B",
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#FF5B5B",
                          border: "1px solid #FF5B5B",
                        },
                      }}
                    >
                      -
                    </Button>
                    <Typography sx={{ mx: 2 }}>{item.quantity}</Typography>
                    <Button
                      onClick={() => handlePlusCount(item)}
                      sx={{
                        minWidth: 36,
                        minHeight: 36,
                        borderRadius: "50%",
                        backgroundColor: "#00B074",
                        color: "#fff",
                        fontWeight: "bold",
                        "&:hover": {
                          backgroundColor: "#fff",
                          color: "#00B074",
                          border: "1px solid #00B074",
                        },
                      }}
                    >
                      +
                    </Button>
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>

          <Box sx={{ display: "flex", justifyContent: "flex-end", mt: 4 }}>
            <Button
              variant="contained"
              startIcon={<SlBasket />}
              sx={{
                padding: "12px 36px",
                backgroundColor: "#00B074",
                color: "#fff",
                borderRadius: "12px",
                fontWeight: 600,
                fontSize: "16px",
                textTransform: "none",
                "&:hover": {
                  backgroundColor: "#fff",
                  color: "#00B074",
                  border: "1px solid #00B074",
                },
              }}
            >
              Buy
            </Button>
          </Box>
        </>
      )}
    </Box>
  );
}
