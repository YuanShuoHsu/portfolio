import Head from "next/head";

import Header from "@/components/Header";
import Banner from "@/components/Banner";

import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Yuan Shuo Hsu</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.home}>
        <Header />
        <Banner />
      </main>
    </>
  );
}