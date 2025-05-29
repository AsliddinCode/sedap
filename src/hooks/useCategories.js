import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
const ROOT_PATH = "/categories";
import useCurrentUser from "./useCurrentUser";

export default function useCategory() {
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState();
  const user = useCurrentUser
  useEffect(() => {
    axiosInstance
      .get(ROOT_PATH)
      .then((res) => setCategories(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  }, []);

  const createCategory = (data) => {
    if (data?.restaurantId) {
      const values = {
        data: {
          name: data.name,
          description: data.description,
          internalName: `Asliddin_${data.name}`,
          restaurant: user.restaurantId,
        },
      };

      axiosInstance
        .post(ROOT_PATH, values, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log("Success:", res.data);
          reFetch();
        })
        .catch((error) => {
          console.error("Error creating category:", error);
          setError(error);
        });
    } else {
      console.error("restaurantId topilmadi");
    }
  };

  const getCategory = async (documentId) => {
    const cat = axiosInstance
      .get(ROOT_PATH + "/" + documentId)
      .then((res) => res.data.data)
      .catch((err = console.error(error)));
    return cat;
  };
  const deletyCategory = async (documentId) => {
    axiosInstance
      .delete(documentId)
      .then((res) => {
        console.log(res, "res");
      })
      .catch((err) => {
        setError(err);
      });
  };
  const reFetch = () => {
    setIsLoading(true);
    axiosInstance
      .get(ROOT_PATH)
      .then((res) => setCategories(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const updateCategory = async (data) => {
    if (!data?.documentId) {
      console.error("documentId topilmadi");
      return;
    }

    const values = {
      data: {
        name: data.name,
        description: data.description,
        internalName: `Asliddin_${data.name}`,
        restaurant: data.restaurantId || data?.restaurantId,
      },
    };

    axiosInstance
      .put(`${ROOT_PATH}/${data.documentId}`, values)
      .then((res) => {
        console.log("Updated:", res.data);
        reFetch();
      })
      .catch((error) => {
        console.error("Xatolik:", error);
        setError(error);
      });
  };

  return [
    {
      categories,
      isLoading,
      error,
      reFetch,
    },
    {
      getCategory,
      createCategory,
      deletyCategory,
      updateCategory,
    },
  ];
}
