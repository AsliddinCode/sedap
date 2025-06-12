import { useEffect, useState } from "react";
import { axiosInstance } from "@/utils/axiosInstance";
const ROOT_PATH = "/types";
import useCategories from "./useCategories";

export default function useTypes() {
  const [isLoading, setIsLoading] = useState(true);
  const [types, setTypes] = useState([]);
  const [error, setError] = useState();
  const [{ categories }, {}] = useCategories();
  // useEffect(() => {
  //   if (categories.length > 0) {
  //     axiosInstance
  //       .get(
  //         `${ROOT_PATH}?filters[category][documentId][$in]=${categories.map(
  //           (c) => c.documentId
  //         )}&populate=*`
  //       )
  //       .then((response) => {
  //         setTypes(response.data.data);
  //       })
  //       .catch((error) => {
  //         console.log("error", error);
  //       })
  //       .finally(() => {
  //         setIsLoading(false);
  //       });
  //   }
  // }, [categories]);
  useEffect(() => {
    if (categories.length > 0) {
      const params = new URLSearchParams();
      categories.forEach((c, index) => {
        params.append(
          `filters[category][documentId][$in][${index}]`,
          c.documentId
        );
      });
      params.append("populate", "*");

      axiosInstance
        .get(`${ROOT_PATH}?${params.toString()}`)
        .then((response) => {
          setTypes(response.data.data);
        })
        .catch((error) => {
          console.log("error", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [categories]);

  const reFetch = () => {
    setIsLoading(true);
    const params = new URLSearchParams();
    categories.forEach((c, index) => {
      params.append(
        `filters[category][documentId][$in][${index}]`,
        c.documentId
      );
    });
    params.append("populate", "*");

    axiosInstance
      .get(`${ROOT_PATH}?${params.toString()}`)
      .then((res) => setTypes(res.data.data))
      .catch((err) => setError(err))
      .finally(() => setIsLoading(false));
  };

  const createType = (data) => {
    if (data) {
      const values = {
        data: {
          name: data.name,
          category: data.category,
        },
      };

      axiosInstance
        .post(ROOT_PATH, values)
        .then((res) => {
          console.log("Success:", res.data.data);
          setTypes(res.data.data);
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

  const getType = async (documentId) => {
    const type = axiosInstance
      .get(ROOT_PATH + "/" + documentId)
      .then((res) => res.data.data)
      .catch((err = console.error(error)));
    return type;
  };

  const deleteType = async (documentId) => {
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

  // const reFetch = () => {
  //   setIsLoading(true);
  //   axiosInstance
  //   .get(
  //     `${ROOT_PATH}?filters[category][documentId][$in]=${categories.map(
  //       (c) => c.documentId
  //     )}&populate=*`
  //   )
  //     .then((res) => setTypes(res.data.data))
  //     .catch((err) => setError(err))
  //     .finally(() => setIsLoading(false));
  // };

  const updateType = async (data) => {
    if (!data?.documentId) {
      console.error("documentId topilmadi");
      return;
    }
    console.log("types", data);
    const values = {
      data: {
        name: data.name,
        category: data.category,
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
      types,
      isLoading,
      error,
      categories,
      reFetch,
    },
    {
      getType,
      createType,
      updateType,
      deleteType,
    },
  ];
}