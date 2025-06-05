import Head from "next/head";
import React from "react";
import MainLayout from "@/components/common/layouts/MainLayout";
import { useRouter } from "next/router";
import FoodDetailComponent from "@/components/pages/foods/FoodDetailComponet";

import HeaderInput from "@/components/common/HeaderInput";
import useFoods from "@/hooks/useFoods";

export default function FoodDetail() {
  const router = useRouter();
  console.log(router, 'ro');
  const [{foods}] = useFoods()

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

        {foods ? <FoodDetailComponent data={foods} /> : <p>Failed</p>}
      </div>
    </>
  );
}

FoodDetail.getLayout = (pageProps) => (
  <MainLayout>
    <FoodDetail {...pageProps} />
  </MainLayout>
);