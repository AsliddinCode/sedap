
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

function useFetchApiItems(path) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [count, setCount] = useState(1);

  useEffect(() => {
    if (!path) return;
    setIsLoading(true);
    axiosInstance
      .get(path)
      .then((res) => setItems(res.data.data))
      .catch((err) => {
        console.error("Fetch error:", err);
        setItems([]);
      })
      .finally(() => setIsLoading(false));
  }, [path, count]);

  const refetch = () => setCount((c) => c + 1);

  return [items, isLoading, refetch];
}

export default useFetchApiItems;