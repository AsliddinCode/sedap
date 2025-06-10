import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
const ROOT_PATH = "/foods";
import useCurrentUser from "./useCurrentUser";


export default function useFoods() {
  const [isLoading, setIsLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [error, setError] = useState();
  const user = useCurrentUser();

  useEffect(() => {
    if (user) {
      axiosInstance
        .get(
          `${ROOT_PATH}?filters[restaurant][documentId][$eq]=${user?.restaurantId}&populate[type][populate][0]=category`
        )
        .then((response) => {
          setFoods(response.data.data);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [user]);

  const createFood = (data) => {
    if (data) {
      const values = {
        data: {
          name: data.name,
          price: data.price ? parseInt(data.price, 10):null ,
          image: data.image,
          comment: data.comment,
          restaurant: user?.restaurantId,
          type: data.type ?data.type : null,
        },
      };
      axiosInstance
        .post(ROOT_PATH, values)
        .then((res) => {
          console.log("Success:", res.data.data);
          setFoods(res.data.data);
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

  const getFood = async (documentId) => {
    const food = await axiosInstance
      .get(ROOT_PATH + "/" + documentId + "?populate=*")
      .then((res) => res.data.data)
      .catch((error) => {
        console.log(error);
      });
    return food;
  };

  const deletyFood = async (documentId) => {
    axiosInstance
      .delete(`${ROOT_PATH}/${documentId}`)
      .then((res) => {
        console.log(res, "res");
        reFetch();
      })
      .catch((err) => {
        setError(err);
      });
  };

  const reFetch = () => {
    setIsLoading(true);
    axiosInstance
      .get(
        `${ROOT_PATH}?filters[restaurant][documentId][$eq]=${user.restaurantId}`
      )
      .then((res) => setFoods(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const updateFood = async (data) => {
    if (!data?.documentId) {
      console.error("documentId topilmadi");
      return;
    }
    const values = {
      data: {
        name: data.name,
        price: data.price ? parseInt(data.price, 10):null ,
        image: data.image,
        comment: data.comment,
        type: data.type ?data.type : null,
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
      foods,
      isLoading,
      error,
      reFetch,
    },
    {
      getFood,
      createFood,
      deletyFood,
      updateFood,
    },
  ];
}
