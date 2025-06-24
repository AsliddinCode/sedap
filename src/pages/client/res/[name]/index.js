import React, { useState, useEffect } from "react";
import useFoods from "@/hooks/useFoods";
import { useRouter } from "next/router";
import useCategory from "@/hooks/useCategories";
import { Box, Link, Button } from "@mui/material";
import { useUsersWithRestaurants } from "@/hooks/useUsersWithRestaurants";
import Purchases from "@/components/pages/purchases/purchases";
import useCurrentUser from "@/hooks/useCurrentUser";
import { useCurUser } from "@/hooks/useCurUser";

export default function Bucket() {
  const [search, setSearch] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const router = useRouter();
  const { curUser } = useCurUser();
  const { users, loading } = useUsersWithRestaurants();
  const [resName, setResName] = useState(null);
  const catHook = useCategory(resName);
  const [{ categories }] = catHook;
  const [{ foods, isLoading, error }] = useFoods(resName);
  const [foodCount, setFoodCount] = useState(0);
  // const restaurants = curUser?.filter((item) => item.restaurant) || [];
  // const foundRestaurant = restaurants[0] ?? null;
  console.log("router", router.query.name);
  console.log("resname", resName);

  useEffect(() => {
    if (router.isReady && router.query.name) {
      setResName(router.query.name);
    }
  }, [router.isReady, router.query.name]);

  useEffect(() => {
    let result = foods;
    if (search.length > 0) {
      result = foods.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredFoods(result);
  }, [search, foods]);

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
        return;
      }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    const totalCount = cart.reduce((sum, i) => sum + i.quantity, 0);
    setFoodCount(totalCount);
  };

  let foodsByCat;
  return (
    <>
      <Box sx={{ display: "flex", height: "100%", width: "100%" }}>
        <Box
          sx={{
            width: "220px",
            padding: "20px 10px",
            borderRight: "1px solid #ddd",
            height: "100vh",
            position: "sticky",
            top: 0,
            overflowY: "auto",
            backgroundColor: "#f5f5f5",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {categories.map((cat) => (
            <CategoryCom key={cat.id} items={cat.name} id={cat.documentId} />
          ))}
        </Box>

        <Box
          sx={{
            flex: 1,
            padding: "20px",
            overflowY: "auto",
            maxHeight: "100vh",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          {filteredFoods.length > 0 ? (
            categories.map((cat) => {
              const foodsByCategory = filteredFoods.filter(
                (food) => food.type?.category?.documentId === cat.documentId
              );
              if (foodsByCategory.length === 0) return null;
              foodsByCat = foodsByCategory;

              return (
                <Box key={cat.documentId} sx={{ marginBottom: "50px" }}>
                  <h2 id={cat.documentId} style={{ fontSize: "24px", marginBottom:'50px' }}>
                    {cat.name}
                  </h2>
                  <Box
                    sx={{
                      display: "flex",
                      flexWrap: "wrap",
                      gap: "30px",
                    }}
                  >
                    {foodsByCategory.map((item) => (
                      <Box
                        key={item?.id}
                        sx={{
                          width: "250px",
                          backgroundColor: "#fff",
                          borderRadius: "12px",
                          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                          position: "relative",
                          textAlign: "center",
                          paddingTop: "100px",
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: "-50px",
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "160px",
                            height: "160px",
                            backgroundColor: "white",
                            borderRadius: "50%",
                            overflow: "hidden",
                            boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                          }}
                        >
                          <img
                            width={160}
                            height={160}
                            src={item?.image}
                            alt={item?.name}
                            style={{ objectFit: "cover" }}
                          />
                        </Box>
                        <Box sx={{ padding: "15px" }}>
                          <h3 style={{ fontWeight: "700", fontSize: "18px" }}>{item?.name}</h3>
                          <p style={{ color: "#00B074", fontSize: "14px", marginBottom: "10px" }}>
                            {item?.type?.category?.name} / {item?.type?.name}
                          </p>
                          <Box
                            sx={{
                              display: "flex",
                              justifyContent: "center",
                              gap: "10px",
                            }}
                          >
                            <Button
                              onClick={() => handlePlusCount(item)}
                              sx={{
                                backgroundColor: "#00B074",
                                color: "white",
                                borderRadius: "20px",
                                minWidth: "40px",
                                "&:hover": {
                                  backgroundColor: "white",
                                  color: "#00B074",
                                  border: "1px solid #00B074",
                                },
                              }}
                            >
                              +
                            </Button>
                            <Button
                              onClick={() => handleMinusCount(item)}
                              sx={{
                                backgroundColor: "#FF5B5B",
                                color: "white",
                                borderRadius: "20px",
                                minWidth: "40px",
                                "&:hover": {
                                  backgroundColor: "white",
                                  color: "#FF5B5B",
                                  border: "1px solid #FF5B5B",
                                },
                              }}
                            >
                              -
                            </Button>
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              );
            })
          ) : (
            <h1 style={{ textAlign: "center" }}>Food topilmadi!</h1>
          )}
        </Box>

        <Box
          sx={{

            padding: "20px",
            borderLeft: "1px solid #ccc",
            height: "100vh",
            position: "sticky",
            top: 0,
            overflowY: "auto",
            backgroundColor: "#fafafa",
            scrollbarWidth: "none",
            "&::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Purchases foodsByCat={foodsByCat} />
        </Box>
      </Box>
    </>
  );
}

const CategoryCom = function ({ items, id }) {
  return (
    <Link
      href={`#${id}`}
      sx={{
        display: "block",
        padding: "12px",
        marginBottom: "12px",
        backgroundColor: "#eaeaea",
        borderRadius: "8px",
        fontSize: "15px",
        fontWeight: 500,
        textDecoration: "none",
        color: "#333",
        transition: "0.2s",
        "&:hover": {
          backgroundColor: "#d6d6d6",
        },
      }}
    >
      {items}
    </Link>
  );
};
