import HeroHome from "@/components/common/HeroHome/HeroHome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Јади домашно</title>
      </Head>
      <main>
        <HeroHome />
      </main>
    </>
  );
}
