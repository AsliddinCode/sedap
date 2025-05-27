import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

export default function useCurrentUser() {
  const [user, setUser] = useState(null);

  const handleType = (cats) => {
    const [firstCategory] = cats;
    const categoryId = firstCategory?.id || firstCategory?.documentId;
    const values = {
      data: {
        name: "Tapichka",
        category: categoryId,
      },
    };

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    };

    fetch("http://192.168.100.109:1337/api/types", options)
      .then((response) => response.json())
      .then((res) => {
        console.log("Type created:", res);
      })
      .catch((error) => console.error("Type creation failed:", error));
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      let user1 = localStorage.getItem("user");
      user1 = user1 ? JSON.parse(user1) : null;
      setUser(user1);
    }
  }, []);

  return [user,  handleType];
}
