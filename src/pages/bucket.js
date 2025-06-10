import React, { useState, useEffect } from "react";
import useFoods from "@/hooks/useFoods";
import { useRouter } from "next/router";
import useCurrentUser from "@/hooks/useCurrentUser";
import MainLayout from "@/components/common/layouts/MainLayout";
import useCategory from "@/hooks/useCategories";

export default function Bucket({}) {
  const [search, setSearch] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const router = useRouter();
  const user = useCurrentUser();
  const [categories] = useCategory();
  const [{ foods, isLoading }] = useFoods();
  const restaurants = user?.restaurants || [];
  const foundRestaurant = restaurants[0] ?? null;
  useEffect(() => {
    const result =
      search.length > 0
        ? foods.filter((item) =>
            item.name?.toLowerCase().includes(search.toLowerCase())
          )
        : foods;
    setFilteredFoods(result);
  }, [search, foods]);

  return (
    <>
      <div>
        
        <button
          style={{
            width: "100px",
            height: "30px",
            backgroundColor: "red",
            color: "white",
            border: "none",
            borderRadius: "26px",
          }}
        >
          <span>Savatcha |</span>
        </button>
      </div>
      {isLoading && foundRestaurant ? (
        <p style={{ textAlign: "center" }}>Yuklanmoqda...</p>
      ) : filteredFoods.length > 0 ? (
        <div
          style={{
            maxWidth: "1460px",
            padding: "40px 20px",
            display: "flex",
            flexWrap: "wrap",
            gap: "40px",
          }}
        >
          {filteredFoods.map((item) => (
            <div
              key={item?.id}
              style={{
                width: "276px",
                minHeight: "340px",
                borderRadius: "14px",
                backgroundColor: "#fff",
                boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
                position: "relative",
                paddingTop: "100px",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  top: "-50px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  width: "160px",
                  height: "160px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  overflow: "hidden",
                  marginTop: "15px",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.15)",
                }}
              >
                <img
                  width={160}
                  height={160}
                  src={item?.img}
                  alt={item?.name}
                  style={{
                    objectFit: "contain",
                  }}
                />
              </div>
              <div style={{ padding: "20px" }}>
                <h3
                  style={{
                    fontWeight: "700",
                    fontSize: "18px",
                    margin: "0 0 8px 0",
                    marginTop: "10px",
                  }}
                >
                  {item?.name}
                </h3>
                <p
                  style={{
                    color: "#00B074",
                    fontSize: "14px",
                    margin: "0 0 20px 0",
                  }}
                >
                  {item?.type?.category?.name} / {item?.type?.name}
                </p>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-around",
                    width: "100%",
                  }}
                >
                  <div style={{ maxWidth: "40px", maxHeight: "40px" }}>
                    <button
                      style={{ width: "100%", height: "100%", border: "none" }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                        src="/plus.png"
                        alt="plus"
                      />
                    </button>
                    <span>Plus</span>
                  </div>
                  <div style={{ maxWidth: "40px", maxHeight: "40px" }}>
                    <button
                      style={{ width: "100%", height: "100%", border: "none" }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "100%",
                          overflow: "hidden",
                        }}
                        src="/minus.png"
                        alt="minus"
                      />
                    </button>
                    <span>Minus</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h1 style={{ textAlign: "center" }}>Food topilmadi!</h1>
      )}
    </>
  );
}
Bucket.getLayout = (pageProps) => (
  <MainLayout>
    <Bucket {...pageProps} />
  </MainLayout>
);
