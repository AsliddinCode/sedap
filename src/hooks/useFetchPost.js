import { useEffect, useState } from "react";

export default function useFetchPost(path) {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch(`http://192.168.100.108:1337/api${path}`, {
      method: "POST",
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
  }, [path]);
  return [items, isLoading];
}
