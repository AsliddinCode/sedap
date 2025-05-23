import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

const ROOT_API = '/categories'

function useFetchApiItems(path) {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  const hanCreateCat = (data) => {
    axiosInstance
  }
  useEffect(() => {
    axiosInstance
      .get(path)
      .then((res) => setItems(res.data.data))
      .catch((err) => console.log("err", err))
      .finally(() => setIsLoading(false));
  }, [path, count]);

  return [items, isLoading, () => setCount(count + 1), hanCreateCat];
}

export default useFetchApiItems;