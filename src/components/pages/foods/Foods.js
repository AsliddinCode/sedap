import React, { useState, useEffect } from "react";
import useFetchItems from "@/hooks/useFetchApiItems";
import HeaderInput from "@/components/common/HeaderInput";
import { useRouter } from "next/router";
import { icons } from "@/data";
import Image from "next/image";

export default function Foods({}) {
  const [search, setSearch] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const router = useRouter();

  const handleClick = () => {
    router.push("/foods/new");
  };

  const handleDelete = async (foodId) => {
    try {
      const res = await fetch(
        `http://192.168.100.109:1337/api/foods/${foodId}`,
        {
          method: "DELETE",
        }
      );
      if (res.ok) {
        refetch();
      } else {
        console.error("Delete failed");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleAction = (action, documentId) => {
    if (action === "View") {
      router.push(`/foods/${documentId}`);
    } else if (action === "Edit") {
      router.push(`/foods/${documentId}/edit`);
    } else if (action === "Delete") {
      handleDelete(documentId);
    }
  };

  let user = null;
  if (typeof window !== "undefined") {
    user = localStorage.getItem("user");
    user = user ? JSON.parse(user) : null;
  }

  const [restaurants, isresLoading, refetchres] = useFetchItems(
    `/restaurants?filters[users][documentId][$eqi]=${user?.documentId}`
  );

  const foundRestaurant = restaurants[0] ?? null;

  const [foods, isLoading, refetch] = useFetchItems(
    `/foods?filters[restaurant][documentId][$eqi]=${foundRestaurant?.documentId}&populate[type][populate][0]=category`
  );

  useEffect(() => {
    const result =
      search.length > 0
        ? foods.filter((item) =>
            item.name?.toLowerCase().includes(search.toLowerCase())
          )
        : foods;
    setFilteredFoods(result);
  }, [search, foods]);

  const image = (item) => {
    const img = item?.image;
    if (img.startsWith("https") || img.endsWith(".jpg")) {
      return img;
    }else{
      return "/trash.png"; 
    } 
  };
  return (
    <>
      <HeaderInput setSearch={setSearch} handleClick={handleClick} />

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
                <Image
                  width={160}
                  height={160}
                  src={image(item)}
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
                  {icons.map((icon) => (
                    <div
                      key={icon.id}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "4px",
                      }}
                    >
                      <button
                        style={{
                          border: "none",
                          borderRadius: "12px",
                          backgroundColor: "#00B0741A",
                          padding: "8px",
                        }}
                        onClick={() => handleAction(icon.name, item.documentId)}
                      >
                        <Image
                          src={icon.img}
                          alt={icon.name}
                          width={24}
                          height={24}
                        />
                      </button>
                      <span
                        style={{
                          fontSize: "12px",
                          color: "#5E6E89",
                          fontWeight: "500",
                        }}
                      >
                        {icon.name}
                      </span>
                    </div>
                  ))}
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
