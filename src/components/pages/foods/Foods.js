import React, { useState, useEffect } from "react";
import { foodData, icons } from "@/data";
import { useRouter } from "next/router";

import HeaderInput from "@/components/common/HeaderInput";

export default function Foods() {
  const [items, setItems] = useState(foodData);
  const [search, setSearch] = useState('');
  const [filteredFoods, setFilteredFoods] = useState(foodData);
  const router = useRouter();

  const handleDelete = (id) => {
    setItems((Items) => {
      return Items.filter((item) => item.id !== id);
    });
  };

  useEffect(() => {
    if (search.length > 0) {
      const filtered = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredFoods(filtered);
    } else {
      setFilteredFoods(items);
    }
  }, [search, items]);

  const handleClick = () => {
    router.push("foods/new");
  };

  return (
    <>
      <HeaderInput setSearch={setSearch} handleClick={handleClick} />
     
      <div
        style={{
          maxWidth: "1260px",
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          padding: "20px 0",
          flexWrap: "wrap",
          margin: "0 auto",
        }}
      >
        {filteredFoods.map((item) => (
          <div
            key={item.id}
            style={{
              width: "276px",
              height: "340px",
              borderRadius: "14px",
              backgroundColor: 'white',
              position: "relative",
              marginTop: "100px",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "50%",
                transform: "translateX(-50%)",
                width: "194px",
                height: "194px",
                backgroundColor: "#C4C4C4",
                borderRadius: "50%",
              }}
            ></div>

            <div
              style={{
                padding: "20px",
                marginTop: "140px",
              }}
            >
              <p
                style={{
                  fontWeight: "700",
                  fontSize: "18px",
                  textAlign: "center",
                  margin: "0 0 8px 0",
                }}
              >
                {item.name}
              </p>
              <p
                style={{
                  color: "#00B074",
                  fontSize: "14px",
                  textAlign: "center",
                  margin: "0 0 20px 0",
                }}
              >
                {item.type} / {item.category}
              </p>
              <Edit id={item.id} handleDelete={handleDelete} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

function Edit({ id, handleDelete }) {
  const router = useRouter();

  
  const handleClick = (item) => {
    if (item === "View") {
      router.push(`/foods/${id}`);
    } else if (item === "Edit") {
      router.push(`/foods/${id}/edit`);
    } else if (item === "Delete") {
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
