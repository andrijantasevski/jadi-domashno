import HeroHome from "@/components/common/HeroHome/HeroHome";
import JoinUs from "@/components/common/JoinUs";
import OurCooks from "@/components/common/OurCooks";
import OurValues from "@/components/common/OurValues";
import SatisfiedCustomers from "@/components/common/SatisfiedCustomers";
import StatisticsHome from "@/components/common/StatisticsHome";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Јади домашно</title>
      </Head>
      <main>
        <HeroHome />
        <OurValues />
        <OurCooks />
        <StatisticsHome />
        <SatisfiedCustomers />
        <JoinUs />
      </main>
    </>
  );
}
