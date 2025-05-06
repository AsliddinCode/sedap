import Head from "next/head";
import React from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import { useRouter } from "next/router";
import FoodDetailComponent from "@/components/pages/foods/FoodDetailComponet";
import useFetchApiItem from "@/hooks/useFetchApiItem";
import HeaderInput from "@/components/common/HeaderInput";

export default function FoodDetail() {
  const router = useRouter();
  console.log(router, 'ro');
  const [food, isLoading] = useFetchApiItem(
    `/foods/${router.query.documentId}?populate[type][populate][0]=category`
  );

  return (
    <>
      <Head>
        <title>Food Detail</title>
      </Head>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "1400px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
        <HeaderInput/>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "26px",
            }}
          >
          </div>
        </div>

        {food ? <FoodDetailComponent data={food} /> : <p>Failed</p>}
      </div>
    </>
  );
}

FoodDetail.getLayout = (pageProps) => (
  <MainLayout>
    <FoodDetail {...pageProps} />
  </MainLayout>
);