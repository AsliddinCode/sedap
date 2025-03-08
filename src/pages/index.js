import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import MainLayout from "@/components/Main";
export default function Dashboard() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div >
      <Link className={styles['click']} href="./orders"><h1>don't click me</h1></Link>
      </div>
    </>
  );
}
Dashboard.getLayout = (pageProps) => (
  <MainLayout>
    <Dashboard {...pageProps} />
  </MainLayout>
)