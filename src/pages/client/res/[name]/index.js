import { useRouter } from "next/router";
import useFoods from "@/hooks/useFoods";
import useCategory from "@/hooks/useCategories";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";

export default function RestaurantFoods() {
  const router = useRouter();
  const { id } = router.query;
  const [{ foods, isLoading }] = useFoods();
  const [categories] = useCategory();
  const [filteredFoods, setFilteredFoods] = useState([]);

  useEffect(() => {
    if (id && foods.length > 0) {
      const result = foods.filter(
        (item) => item?.restaurant?.documentId === id
      );
      setFilteredFoods(result);
    }
  }, [id, foods]);

  if (isLoading) return <p style={{ textAlign: "center" }}>Yuklanmoqda...</p>;

  return (
    <Box sx={{ padding: "20px" }}>
      {filteredFoods.length > 0 ? (
        categories?.categories?.map((cat) => {
          const foodsByCategory = filteredFoods.filter(
            (food) => food.type?.category?.documentId === cat.documentId
          );

          if (foodsByCategory.length === 0) return null;

          return (
            <div key={cat.documentId} style={{ marginBottom: "50px" }}>
              <h2 id={cat.documentId} style={{ marginBottom: "20px" }}>
                {cat.name}
              </h2>
              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "30px",
                }}
              >
                {foodsByCategory.map((item) => (
                  <div
                    key={item.id}
                    style={{
                      width: "260px",
                      padding: "20px",
                      border: "1px solid #ddd",
                      borderRadius: "12px",
                      textAlign: "center",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      style={{
                        width: "100%",
                        height: "160px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                    <h3>{item.name}</h3>
                    <p>
                      {item.type?.category?.name} / {item.type?.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          );
        })
      ) : (
        <h2 style={{ textAlign: "center" }}>Taomlar topilmadi</h2>
      )}
    </Box>
  );
}
