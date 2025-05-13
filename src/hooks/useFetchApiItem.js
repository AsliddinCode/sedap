import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

function useFetchApiItem(path) {
  const [item, setItem] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(path)
      .then((res) => setItem(res.data.data))
      .catch((err) => console.log("err", err))
      .finally(() => setIsLoading(false));
  }, [path]);

  return [item, isLoading];
}

export default useFetchApiItem;