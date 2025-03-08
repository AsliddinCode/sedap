import Head from "next/head";
import OrdersList from "@/components/pages/orders/OrdersList";
import MainLayout from "@/components/Main";
export default function Orders() {
  return (
    <>
      <Head>
        <title>Orders Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <OrdersList/>
      </div>
    </>
    )}
Orders.getLayout = (pageProps) => (
  <MainLayout>
    <Orders {...pageProps} />
  </MainLayout>
)