import { useEffect, useState } from "react";

export default function useCategory() {
  const [user, setUser] = useState(null);
  const handleCreateCategory = (data) => {
    if (user.restaurantId) {
      const values = {
        data: {
          name: data.name,
          description: data.description,
          internalName: `Asliddin_${data.name}`,
          restaurant: user?.restaurantId,
        },
      };

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
      };

      fetch("http://192.168.100.109:1337/api/categories", options)
        .then((response) => response.json())
        .then((res) => {
          console.log(res);
        })
        .catch((error) => console.error(error));
    }
  };
  useEffect(() => {
    if (typeof window !== "undefined") {
      let user1 = localStorage.getItem("user");
      user1 = user1 ? JSON.parse(user1) : null;
      setUser(user1);
    }
  }, []);
  return [handleCreateCategory];
}
