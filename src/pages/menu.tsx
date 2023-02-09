import { GetServerSideProps, NextPage } from "next";
import dynamic from "next/dynamic";
import Head from "next/head";
import "@splidejs/react-splide/css";
import "dayjs/locale/mk";
import SectionTitle from "@/components/ui/SectionTitle";
import SliderDays from "@/components/common/SliderDays";
import SliderFoodCategories from "@/components/common/SliderCuisines";
import SidebarFiltering from "@/components/common/FilteringMenu/SidebarFiltering";
import MenuCard from "@/components/common/MenuCard";
import fetchMenu from "@/utils/fetchMenu";
import { Meal } from "@/components/common/MenuCard";
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
  menu: Meal[];
}

const Menu: NextPage<Props> = ({ queries, menu }) => {
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

      <section className="relative mx-auto w-11/12 max-w-screen-2xl gap-4 pb-10 lg:flex">
        <SidebarFiltering queries={queries} />

        <div className="grid w-full grid-cols-1 gap-6">
          <div className="flex justify-end lg:hidden">
            <MobileDialogFiltering queries={queries} />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {menu.map((meal) => (
              <MenuCard key={meal.id} meal={meal} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const {
    availability,
    city,
    price,
    allergens,
    rating,
    delivery,
    cuisine,
    sortBy,
  } = query;

  const queries = {
    availability: availability ?? "",
    city: city ?? "",
    price: price ?? "",
    allergens: allergens ? (allergens as string).split(",") : [],
    rating: Number(rating as string) ?? 0,
    delivery: delivery ?? "",
  };

  if (
    availability ||
    city ||
    price ||
    allergens ||
    rating ||
    delivery ||
    cuisine ||
    sortBy
  ) {
    let query = "";

    if (availability) {
      query += `availability=${availability}`;
    }

    if (city) {
      query += query ? `&city=${city}` : `city=${city}`;
    }

    if (price) {
      query += query ? `&price=${price}` : `price=${price}`;
    }

    if (allergens) {
      query += query ? `&allergens=${allergens}` : `allergens=${allergens}`;
    }

    if (rating) {
      query += query ? `&rating=${rating}` : `rating=${rating}`;
    }

    if (delivery) {
      query += query ? `&delivery=${delivery}` : `delivery=${delivery}`;
    }

    if (cuisine) {
      query += query ? `&cuisine=${cuisine}` : `cuisine=${cuisine}`;
    }

    if (sortBy) {
      query += query ? `&sortBy=${sortBy}` : `sortBy=${sortBy}`;
    }

    const menu = await fetchMenu(query);

    return {
      props: { queries, menu },
    };
  }

  const menu = await fetchMenu();

  return {
    props: { queries, menu },
  };
};

export default Menu;
