import React, { useState, useEffect } from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import Head from "next/head";
import FoodForm from "@/components/pages/foods/FoodForm";
import useFoods from "@/hooks/useFoods";
import { useRouter } from "next/router";

export default function FoodEdit() {
  const router = useRouter();
  const foodId = router?.query?.documentId;
  const [exist, setExist] = useState(null);

  const [_, { getFood }] = useFoods();

  useEffect(() => {
    if (foodId) {
      getFood(foodId).then((res) => {
        console.log(res, "ds");
        if (!exist) {
          setExist(res);
        }
      });
    }
  }, [foodId]);

  return (
    <>
      <Head>
        <title>Food Edit</title>
      </Head>
      {!exist ? (
        "not"
      ) : (
        <FoodForm title={"Edit food"} food={exist} btnText={"Edit Food"} />
      )}
    </>
  );
}

FoodEdit.getLayout = (pageProps) => (
  <MainLayout>
    <FoodEdit {...pageProps} />
  </MainLayout>
);
