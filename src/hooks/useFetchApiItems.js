import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
const ROOT_PATH = "/categories";

function useFetchApiItems(path) {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const hanCreateCat = async (data) => {
    try {
      const response = await axiosInstance.post(path, {
        data,
      });
      console.log("Yaratildi:", response.data);
      setCount((prev) => prev + 1);
    } catch (error) {
      console.error("Kategoriya yaratishda xatolik:", error);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    axiosInstance
      .get(ROOT_PATH)
      .then((res) => setItems(res.data.data))
      .catch((err) => console.log("Fetch xatolik:", err))
      .finally(() => setIsLoading(false));
  }, [path, count]);

  return [items, isLoading, () => setCount((prev) => prev + 1), hanCreateCat];
}

export default useFetchApiItems;
