import CookCard from "@/components/common/CookCard";
import CooksMobileDialogFiltering from "@/components/common/Cooks/CooksMobileDialogFiltering";
import CooksSidebarFiltering from "@/components/common/Cooks/CooksSidebarFiltering";
import SectionTitle from "@/components/ui/SectionTitle";
import fetchCooks from "@/utils/fetchCooks";
import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";

export interface QueriesCooks {
  city?: string;
  rating: number;
  cuisines: string[];
}

interface Props {
  queriesCooks: QueriesCooks;
  cooks: any;
}

const Cooks: NextPage<Props> = ({ queriesCooks, cooks }) => {
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

        <div className="grid w-full grid-cols-1 gap-6">
          <div className="flex justify-end lg:hidden">
            <CooksMobileDialogFiltering queriesCooks={queriesCooks} />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-3">
            {cooks.map((cook: any) => (
              <CookCard
                key={cook.id}
                href={`/cooks/${cook.id}`}
                location={cook.city}
                {...cook}
              />
            ))}
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
            <CookCard
              href=""
              cuisines={["Македонска", "Италијанска", "Шпанска"]}
              rating={4}
              imageSrc="/assets/homepage/cook-example.jpg"
              name="Петар Петровски"
              location="Битола"
            />
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
