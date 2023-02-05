import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import "@splidejs/react-splide/css";
import "dayjs/locale/mk";
import SectionTitle from "@/components/ui/SectionTitle";
import SliderDays from "@/components/common/SliderDays";
import SliderFoodCategories from "@/components/common/SliderFoodCategories";
import SidebarFiltering from "@/components/common/FilteringMenu/SidebarFiltering";
import Image from "next/image";
import Link from "next/link";
import { HomeIcon, StarIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
const MobileDialogFiltering = dynamic(
  () => import("@/components/common/FilteringMenu/MobileDialogFiltering")
);

export interface Queries {
  city?: string;
  availability?: string;
  price?: string;
  allergens?: string[];
  rating?: number;
  delivery: "delivery" | "pickup";
}

interface Props {
  queries: Queries;
}

const MenuCard = () => {
  return (
    <Link href="/" className="relative z-0 w-full">
      <Image
        src="/assets/example-image.png"
        width="350"
        height="250"
        alt="Image"
        className="w-full"
      />

      <div className="relative z-20 -mt-10 flex gap-2 rounded-lg border-b-2 border-primary-600 bg-gray-100 p-4 shadow-md">
        <Image
          src="/assets/homepage/satisfied-customer1.png"
          width="80"
          height="80"
          alt="Image"
          className="rounded-full border-2 border-primary-600"
        />

        <div className="flex w-full flex-col justify-between">
          <div className="flex flex-col gap-0.5">
            <div className="flex w-full justify-between">
              <p>{"Салата со брокула"}</p>

              <p className="text-primary-600">300 ден.</p>
            </div>

            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, index) =>
                index < 4 ? (
                  <StarIcon className="h-4 w-4 fill-primary-600 text-primary-600" />
                ) : (
                  <StarIcon className="h-4 w-4 text-primary-600" />
                )
              )}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <HomeIcon className="block h-5 w-5 text-primary-600" />
              <p>Битола</p>
            </div>

            <Button size="small">Во кошничка</Button>
          </div>
        </div>
      </div>
      <p></p>
    </Link>
  );
};

const Menu: NextPage<Props> = ({ queries }) => {
  return (
    <>
      <Head>
        <title>Мени</title>
      </Head>

      <div className="flex justify-center py-10">
        <SectionTitle>Мени</SectionTitle>
      </div>

      <section className="mx-auto w-11/12 max-w-2xl pb-10">
        <SliderDays />
      </section>

      <section className="mx-auto hidden w-11/12 pb-10 lg:block lg:max-w-4xl xl:max-w-5xl">
        <SliderFoodCategories />
      </section>

      <section className="relative mx-auto w-11/12 max-w-[1600px] gap-4 pb-10 lg:flex">
        <SidebarFiltering queries={queries} />

        <div className="grid w-full grid-cols-1 gap-6">
          <div className="flex justify-end lg:hidden">
            <MobileDialogFiltering queries={queries} />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
            <MenuCard />
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { availability, city, price, allergens, rating, delivery } = query;

  const queries = {
    availability: availability ?? "",
    city: city ?? "",
    price: price ?? "",
    allergens: allergens ? (allergens as string).split(",") : [],
    rating: Number(rating as string) ?? 0,
    delivery: delivery ?? "",
  };

  return {
    props: { queries },
  };
};

export default Menu;
