import { Cook } from "@/components/common/CookCard";
import HeroHome from "@/components/common/HeroHome/HeroHome";
import JoinUs from "@/components/common/JoinUs";
import OurCooks from "@/components/common/OurCooks";
import OurValues from "@/components/common/OurValues";
import SatisfiedCustomers from "@/components/common/SatisfiedCustomers";
import StatisticsHome from "@/components/common/StatisticsHome";
import fetchCooks from "@/utils/fetchCooks";
import { NextPage } from "next";
import Head from "next/head";

interface Props {
  cooks: Cook[];
}

const Home: NextPage<Props> = ({ cooks }) => {
  return (
    <>
      <Head>
        <title>Јади домашно</title>
      </Head>
      <main>
        <HeroHome />
        <OurValues />
        <OurCooks cooks={cooks} />
        <StatisticsHome />
        <SatisfiedCustomers />
        <JoinUs />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const cooks = await fetchCooks();

  return {
    props: { cooks },
  };
};

export default Home;
