import React from "react";
import PurchasesCom from "@/components/pages/purchases/purchases";
import MainLayout from "@/components/common/layouts/MainLayout";

export default function Purchases() {
  return (
    <>
      <PurchasesCom />
    </>
  );
}

Purchases.getLayout = (pageProps) => (
  <MainLayout>
    <Purchases {...pageProps} />
  </MainLayout>
);