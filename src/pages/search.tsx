import LoadingCardsSkeleton from "@/components/common/LoadingCardsSkeleton";
import MealModal from "@/components/common/MealModal";
import MenuCard, { Meal } from "@/components/common/MenuCard";
import { SearchIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import useSWRInfinite from "swr/infinite";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Props {
  searchResults: Meal[];
}

const SearchPage: NextPage<Props> = ({ searchResults }) => {
  const router = useRouter();

  const [isMealModalOpen, setIsMealModalOpen] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState<Meal | null>(null);

  const closeMealModal = () => setIsMealModalOpen(false);

  const openMealModal = (meal: Meal) => {
    setSelectedMeal(meal);
    setIsMealModalOpen(true);
  };

  const { data, size, setSize, isValidating } = useSWRInfinite(
    (pageIndex: number) => {
      return `/api/menu?searchQuery=${router.query.searchQuery}&page=${
        pageIndex + 1
      }&limit=12`;
    },
    fetcher,
    {
      fallbackData: searchResults,
    }
  );

  const meals: Meal[] = data ? [].concat(...data) : [];

  const pageTitle = router.query.searchQuery
    ? `Резултати за ${router.query.searchQuery}`
    : "Пребарување";

  const searchQuery = router.query.searchQuery;

  const handleLoadMore = () => {
    setSize(size + 1);
  };

  const isEndOfResults = meals.length < 12 || meals.length < 12 * size;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
      </Head>

      <div className="py-10">
        {data && (
          <section className="mx-auto grid w-11/12 max-w-screen-2xl grid-cols-1 gap-4">
            <h2 className="text-xl">
              Резулати за: <span className="font-medium">{searchQuery}</span>
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
              {meals.map((meal) => (
                <MenuCard
                  key={meal.id}
                  meal={meal}
                  openMealModal={openMealModal}
                />
              ))}
            </div>

            {!isEndOfResults && (
              <Button onClick={handleLoadMore}>Покажи повеќе</Button>
            )}

            {isValidating && <LoadingCardsSkeleton />}

            {meals.length === 0 && (
              <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-600">
                  <SearchIcon className="h-6 w-6 text-white" />
                </div>
                <p>
                  За жал не најдовме резултати со низата{" "}
                  <span className="font-medium">{searchQuery}</span>
                </p>

                <Button href="/menu">Посетете го менито</Button>
              </div>
            )}
          </section>
        )}
      </div>

      {isMealModalOpen && (
        <MealModal
          closeMealModal={closeMealModal}
          isMealModalOpen={isMealModalOpen}
          selectedMeal={selectedMeal}
        />
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { searchQuery } = context.query;

  if (!searchQuery) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }

  const searchResultsRes = await fetch(
    `${process.env.NEXT_PUBLIC_URL}/api/menu?searchQuery=${searchQuery}&page=1&limit=12`
  );

  const searchResults = await searchResultsRes.json();

  return {
    props: { searchResults },
  };
};

export default SearchPage;
