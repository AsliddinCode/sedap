import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";

export default function useCategory() {
  const [user, setUser] = useState(null);
  const [error, setError]=useState()

  const handleCreateCategory = async (data) => {
    if (user?.restaurantId) {
      const values = {
        data: {
          name: data.name,
          description: data.description,
          internalName: `Asliddin_${data.name}`,
          restaurant: user.restaurantId,
        },
      };

      try {
        const response = await axiosInstance.post(
          "/categories",
          values,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        console.log("Success:", response.data);
      } catch (error) {
        console.error("Error creating category:", error);
      }
    }
  };



  const deletyCategory = async (documentId)=>{
    axiosInstance
    .delete(documentId)
    .then((res)=>{
      console.log(res, 'res');
    })
    .catch((err)=>{
      setError(err)
    })
  }
  useEffect(() => {
    if (typeof window !== "undefined") {
      let user1 = localStorage.getItem("user");
      user1 = user1 ? JSON.parse(user1) : null;
      setUser(user1);
    }
  }, []);

  return [handleCreateCategory];
}
