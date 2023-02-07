import CookCard from "@/components/common/CookCard";
import CooksMobileDialogFiltering from "@/components/common/Cooks/CooksMobileDialogFiltering";
import CooksSidebarFiltering from "@/components/common/Cooks/CooksSidebarFiltering";
import SectionTitle from "@/components/ui/SectionTitle";
import fetchCooks from "@/utils/fetchCooks";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Cook } from "@/components/common/CookCard";
import { Menu } from "@headlessui/react";
import Button from "@/components/ui/Button";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ChevronDownIcon } from "@/components/icons";

export interface QueriesCooks {
  city?: string;
  rating: number;
  cuisines: string[];
}

interface Props {
  queriesCooks: QueriesCooks;
  cooks: Cook[];
}

const SortByMenu = () => {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState(false);
  const handleSortBy = (sortBy: string, pathname: string) => {
    router.push({
      pathname,
      query: {
        ...router.query,
        sortBy,
      },
    });
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <>
      {isMounted ? (
        <Menu as="div" className="relative">
          <Menu.Button>
            <Button ariaLabel="Подредете ги готвачите по различни параметри">
              <ChevronDownIcon className="h-4 w-4 text-inherit" />
              Подредете
            </Button>
          </Menu.Button>

          <Menu.Items className="absolute top-12 left-0 z-10 grid w-72 grid-cols-1 gap-2 rounded-lg bg-gray-100 p-4 shadow-md lg:left-auto lg:right-0">
            <Menu.Item>
              <Button
                fullWidth
                size="small"
                onClick={() => handleSortBy("lowestRated", "/cooks")}
              >
                Оцена ниска кон висока
              </Button>
            </Menu.Item>
            <Menu.Item>
              <Button
                fullWidth
                size="small"
                onClick={() => handleSortBy("highestRated", "/cooks")}
              >
                Оцена висока кон ниска
              </Button>
            </Menu.Item>

            <Menu.Item>
              <Button
                fullWidth
                size="small"
                onClick={() => handleSortBy("newest", "/cooks")}
              >
                Најново додадени
              </Button>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      ) : (
        <Button ariaLabel="Подредете ги готвачите по различни параметри">
          <ChevronDownIcon className="h-4 w-4 text-inherit" />
          Подредете
        </Button>
      )}
    </>
  );
};

const Cooks: NextPage<Props> = ({ queriesCooks, cooks }) => {
  const cooksNumber = cooks.length === 0 ? "Нема" : cooks.length;
  return (
    <>
      <Head>
        <title>Готвачи</title>
      </Head>

      <section className="mx-auto flex w-11/12 max-w-5xl flex-col items-center justify-center gap-6 py-10 text-center">
        <SectionTitle>Нашите готвачи</SectionTitle>

        <div className="hidden flex-col gap-4 text-center leading-relaxed lg:flex">
          <p>Јади Домашно поврзува талентирани готвачи со локални клиенти.</p>

          <p>
            Ние веруваме во обезбедувањето на шефовите во нашата заедница -
            поединци кои отсекогаш сонувале да градат сопствен бизнис со храна -
            можност да заработат значаен приход правејќи го она што го сакаат!
            Ние, исто така, веруваме дека секој човек треба да има пристап до
            здрав, домашен оброк по прифатлива цена. Градење заедница посветена
            на економско зајакнување и културна инклузивност - затоа почнавме да
            го градиме нашето семејство.
          </p>

          <p className="font-bad-script text-2xl">Јади домашно</p>
        </div>
      </section>

      <section className="relative mx-auto w-11/12 max-w-[1600px] gap-4 pb-10 lg:flex">
        <CooksSidebarFiltering queriesCooks={queriesCooks} />

        <div className="grid w-full grid-cols-1 gap-4">
          <div className="flex items-center justify-between">
            <p className="hidden text-lg lg:block">
              <span className="font-bold">{cooksNumber}</span>{" "}
              {cooksNumber === 1 ? "готвач" : "готвачи"}
            </p>
            <SortByMenu />
            <CooksMobileDialogFiltering queriesCooks={queriesCooks} />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {cooks.map((cook) => (
              <CookCard key={cook.id} cook={cook} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { city, rating, cuisines, sortBy } = query;

  const queriesCooks = {
    city: city ? city : "",
    rating: Number(rating as string) ?? 0,
    cuisines: cuisines ? (cuisines as string).split(",") : [],
  };

  if (city || rating || cuisines || sortBy) {
    let query = "";

    if (city) {
      query += `city=${city}`;
    }

    if (rating) {
      query += query ? `&rating=${rating}` : `rating=${rating}`;
    }

    if (cuisines) {
      query += query ? `&cuisines=${cuisines}` : `cuisines=${cuisines}`;
    }

    if (sortBy) {
      query += query ? `&sortBy=${sortBy}` : `sortBy=${sortBy}`;
    }

    const cooks = await fetchCooks(query);

    return {
      props: { queriesCooks, cooks },
    };
  }

  const cooks = await fetchCooks();

  return {
    props: { queriesCooks, cooks },
  };
};

export default Cooks;
