import { GetServerSideProps, NextPage } from "next";
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
import getMinMaxPrice, { MinMaxPrices } from "@/utils/getMinMaxPrice";
import { useState } from "react";
import MobileDialogFiltering from "@/components/common/FilteringMenu/MobileDialogFiltering";
import MealModal from "@/components/common/MealModal";
import useSWRInfinite from "swr/infinite";
import { useRouter } from "next/router";
import Button from "@/components/ui/Button";
import LoadingCardsSkeleton from "@/components/common/LoadingCardsSkeleton";

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
  minMaxPrices: MinMaxPrices;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Menu: NextPage<Props> = ({ queries, menu, minMaxPrices }) => {
  const router = useRouter();
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);
  const [isMealModalOpen, setIsMealModalOpen] = useState(false);

  const openMealModal = (meal: Meal) => {
    setSelectedMeal(meal);
    setIsMealModalOpen(true);
  };

  const closeMealModal = () => setIsMealModalOpen(false);

  const { data, size, setSize, isValidating } = useSWRInfinite(
    (pageIndex: number) => {
      return `/api/menu?page=${pageIndex + 1}&limit=12${
        router.query.city ? `&city=${router.query.city}` : ""
      }${
        router.query.availability
          ? `&availability=${router.query.availability}`
          : ""
      }${router.query.price ? `&price=${router.query.price}` : ""}${
        router.query.rating ? `&rating=${router.query.rating}` : ""
      }${router.query.delivery ? `&delivery=${router.query.delivery}` : ""}${
        router.query.allergens ? `&allergens=${router.query.allergens}` : ""
      }${router.query.cuisine ? `&cuisine=${router.query.cuisine}` : ""}${
        router.query.currentDay
          ? `&currentDay=${router.query.currentDay}`
          : "&currentDay=0"
      }`;
    },
    fetcher,
    {
      fallbackData: menu,
    }
  );

  const menuData = data ? ([].concat(...data) as Meal[]) : [];

  const isEndOfMenu = menuData.length < 12 || menuData.length < 12 * size;

  const handleLoadMore = () => {
    setSize(size + 1);
  };

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
        <SidebarFiltering queries={queries} minMaxPrices={minMaxPrices} />

        <div className="grid w-full grid-cols-1 gap-6">
          <div className="flex justify-end lg:hidden">
            <MobileDialogFiltering
              minMaxPrices={minMaxPrices}
              queries={queries}
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {menuData.map((meal) => (
              <MenuCard
                openMealModal={openMealModal}
                key={meal.id}
                meal={meal}
              />
            ))}
          </div>
          {isValidating && <LoadingCardsSkeleton />}

          {!isEndOfMenu && (
            <div className="flex items-center justify-center">
              <Button onClick={handleLoadMore}>Прикажи повеќе</Button>
            </div>
          )}
        </div>
      </section>
      {isMealModalOpen && (
        <MealModal
          selectedMeal={selectedMeal}
          closeMealModal={closeMealModal}
          isMealModalOpen={isMealModalOpen}
        />
      )}
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
    currentDay,
    limit,
    page,
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
    sortBy ||
    currentDay ||
    cuisine ||
    limit ||
    page
  ) {
    let query = limit ? `?limit=${limit}&` : "?limit=12";

    query += currentDay ? `&currentDay=${currentDay}` : "&currentDay=0";

    query += page ? `&page=${page}` : "&page=1";

    if (availability) {
      query += `&availability=${availability}`;
    }

    if (city) {
      query += `&city=${city}`;
    }

    if (price) {
      query += `&price=${price}`;
    }

    if (allergens) {
      query += `&allergens=${allergens}`;
    }

    if (rating) {
      query += `&rating=${rating}`;
    }

    if (delivery) {
      query += `&delivery=${delivery}`;
    }

    if (cuisine) {
      query += `&cuisine=${cuisine}`;
    }

    if (sortBy) {
      query += `&sortBy=${sortBy}`;
    }

    const menu = await fetchMenu(query);

    const minMaxPrices = await getMinMaxPrice();

    return {
      props: { queries, menu, minMaxPrices },
    };
  }

  const menu = await fetchMenu();

  const minMaxPrices = await getMinMaxPrice();

  return {
    props: { queries, menu, minMaxPrices },
  };
};

export default Menu;
