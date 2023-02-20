import { Cook } from "@/components/common/CookCard";
import HeroHome from "@/components/common/HeroHome/HeroHome";
import JoinUs from "@/components/common/JoinUs";
import OurCooks from "@/components/common/OurCooks";
import OurValues from "@/components/common/OurValues";
import SatisfiedCustomers from "@/components/common/SatisfiedCustomers";
import StatisticsHome from "@/components/common/StatisticsHome";
import fetchCooks from "@/utils/fetchCooks";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import * as fs from "fs";
import path from "path";

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

export const getStaticProps: GetStaticProps = async () => {
  const COOKS_FILE_PATH = path.join(process.cwd(), "data", "cooks.json");

  const cooksJSON = fs.readFileSync(COOKS_FILE_PATH, "utf-8");

  const cooks = JSON.parse(cooksJSON);

  return {
    props: { cooks },
    revalidate: 60,
  };
};

export default Home;
