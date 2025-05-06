import { useState, useEffect } from "react";

function useFetchApiItems(path) {
  const [items, setItems] = useState([]);
  const [count, setCount] = useState(1);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(`http://192.168.100.108:1337/api${path}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data.data);
        setItems(data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  }, [path, count]);

  return [items, isLoading, () => setCount(count + 1)];
}

export default useFetchApiItems;