import React, { useState, useEffect } from "react";
import { icons } from "@/data";
import { useRouter } from "next/router";
import useFetchItems from "@/hooks/useFetchApi";
import HeaderInput from "@/components/common/HeaderInput";

export default function Foods() {
  const [items, setItems] = useState([]);
  const [search, setSearch] = useState("");
  const [filteredFoods, setFilteredFoods] = useState([]);
  const router = useRouter();

  const [foods, isLoading] = useFetchItems("/foods?populate[type][populate][0]=category");

  useEffect(() => {
    setItems(foods);
  }, [foods]);

  useEffect(() => {
    if (search.length > 0) {
      const filtered = items.filter((item) =>
        item.name?.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredFoods(filtered);
    } else {
      setFilteredFoods(items);
    }
  }, [search, items]);

  const handleDelete = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClick = () => {
    router.push("foods/new");
  };

  return (
    <>
      <HeaderInput setSearch={setSearch} handleClick={handleClick} />

      {isLoading ? (
        <p style={{ textAlign: "center" }}>Yuklanmoqda...</p>
      ) : search.length > 0 ? (
        filteredFoods.length > 0 ? (
          <FoodsList data={filteredFoods} handleDelete={handleDelete} />
        ) : (
          <h1 style={{ textAlign: "center" }}>Food topilmadi!</h1>
        )
      ) : (
        <FoodsList data={items} handleDelete={handleDelete} />
      )}
    </>
  );
}
function FoodsList({ data, handleDelete }) {
  console.log('data', data);
  return (
    <div
      style={{
        maxWidth: "1460px",
        padding: "40px 20px",
        display: "flex",
        flexWrap: "wrap",
        gap: "40px",
      }}
    >
      {data.map((item) => (
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
              width: "150px",
              height: "150px",
              backgroundColor: "#C4C4C4",
              borderRadius: "50%",
              marginTop:'15px'
            }}
          >
            
          </div>
          <div style={{ padding: "20px" }}>
            <h3
              style={{
                fontWeight: "700",
                fontSize: "18px",
                margin: "0 0 8px 0",
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
              {item?.type?.name} / {item?.type?.category?.name}
            </p>
            <Edit id={item?.id} handleDelete={handleDelete} />
          </div>
        </div>
      ))}
    </div>
  );
}


function Edit({ id, handleDelete }) {
  const router = useRouter();

  const handleClick = (action) => {
    if (action === "View") {
      router.push(`/foods/${id}`);
    } else if (action === "Edit") {
      router.push(`/foods/${id}/edit`);
    } else if (action === "Delete") {
      handleDelete(id);
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {icons.map((item) => (
        <div
          key={item.id}
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
            onClick={() => handleClick(item.name)}
          >
            <img
              style={{
                width: "24px",
                height: "24px",
              }}
              src={item.img}
              alt={item.name}
            />
          </button>
          <span
            style={{
              fontSize: "12px",
              color: "#5E6E89",
              fontWeight: "500",
            }}
          >
            {item.name}
          </span>
        </div>
      ))}
    </div>
  );
}
