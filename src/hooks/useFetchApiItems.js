import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

function useFetchApiItems(path) {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(path)
      .then((res) => setItems(res.data.data))
      .catch((err) => console.log("err", err))
      .finally(() => setIsLoading(false));
  }, [path, count]);

  return [items, isLoading, () => setCount(count + 1)];
}

export default useFetchApiItems;