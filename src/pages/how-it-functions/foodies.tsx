import CookCard, { Cook } from "@/components/common/CookCard";
import SatisfiedCustomers from "@/components/common/SatisfiedCustomers";
import { ChevronDownIcon, ChevronUpDownIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import fetchCooks from "@/utils/fetchCooks";
import { Disclosure } from "@headlessui/react";
import { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import path from "path";
import * as fs from "fs";

const missionAndVision = [
  {
    image: "/assets/how-it-functions/mission-vision-1.jpg",
    title: "Поврзување!",
    description: "Вистински луѓе. Автентична љубов.",
  },
  {
    image: "/assets/how-it-functions/mission-vision-2.jpg",
    title: "Споделување на радост!",
    description: "Уживајте во заедницата преку храна.",
  },
  {
    image: "/assets/how-it-functions/mission-vision-3.jpg",
    title: "Кулинарски можности!",
    description: "Зајакнување на домашните готвачи.",
  },
];

interface HowToJoinUs {
  id: number;
  title: string;
  description: string;
  image: string;
}

const howToJoinUs = [
  {
    id: 1,
    title: "Регистрирајте се на платформата како гурман!",
    description:
      "Регистрирајте се! Со ова веќе станувате дел од нашето семејство и имате профил на гурман ",
    image: "/assets/how-it-functions/how-to-become-a-cook-1.png",
  },
  {
    id: 2,
    title: "Нарачајте брзо и лесно!",
    description:
      "Разгледајте ги нашите готвачи, менито коешто го нудат и одберете храна по ваш вкус.",
    image: "/assets/how-it-functions/how-to-become-a-cook-2.png",
  },
  {
    id: 3,
    title: "Јадете домашно!",
    description:
      "Со достава или подигнување - ваш избор! Уживајте во вкусот на домашно приготвена храна од нашите незаменливи готвачи.",
    image: "/assets/how-it-functions/how-to-become-a-cook-5.png",
  },
];

const frequentlyAskedQuestions = [
  {
    id: 1,
    question: "Како да се регистрирам?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus pellentesque nibh neque, vel placerat sapien hendrerit vel.",
  },
  {
    id: 2,
    question: "Како да променам коментар?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus pellentesque nibh neque, vel placerat sapien hendrerit vel.",
  },
  {
    id: 3,
    question: "Како да променам веќе објавена слика на рецепт?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In lacus ligula, suscipit sed suscipit sit amet, tristique sed sapien. Vivamus pellentesque nibh neque, vel placerat sapien hendrerit vel.",
  },
  {
    id: 4,
    question: "Како да го избришам рецептот?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const HeroHowItFunctions = () => {
  const router = useRouter();

  return (
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pt-10 pb-4 lg:py-10">
      <Image
        src="/assets/logo-jadi-domashno-bez-tekst.svg"
        width={70}
        height={70}
        alt="Лого"
      />

      <SectionTitle>Како функционира?</SectionTitle>

      <div className="flex rounded-full bg-gray-100 text-center shadow-md">
        <Link
          href="/how-it-functions/cooks"
          className={`block w-36 rounded-full px-8 py-3 transition-colors lg:px-10 lg:py-5 ${
            router.pathname === "/how-it-functions/cooks"
              ? "bg-primary-600 text-primary-50"
              : "hover:text-primary-600"
          }`}
        >
          Готвачи
        </Link>

        <Link
          href="/how-it-functions/foodies"
          className={`block w-36 rounded-full px-8 py-3 transition-colors lg:px-10 lg:py-5 ${
            router.pathname === "/how-it-functions/foodies"
              ? "bg-primary-600 text-primary-50"
              : "hover:text-primary-600"
          }`}
        >
          Гурмани
        </Link>
      </div>

      <p className="text-center leading-relaxed">
        Јади Домашно поврзува талентирани готвачи со локални клиенти. Ние
        веруваме во обезбедувањето на шефовите во нашата заедница - поединци кои
        отсекогаш сонувале да градат сопствен бизнис со храна - можност да
        заработат значаен приход правејќи го она што го сакаат! Ние, исто така,
        веруваме дека секој човек треба да има пристап до здрав, домашен оброк
        по прифатлива цена. Градење заедница посветена на економско зајакнување
        и културна инклузивност - затоа го започнавме Јади Домашно.
      </p>
    </section>
  );
};

interface BorderedImageWithTextProps {
  image: string;
  title: string;
  description: string;
}

const BorderedImageWithText = ({
  image,
  title,
  description,
}: BorderedImageWithTextProps) => {
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4 text-center">
      <Image
        src={image}
        width={300}
        height={300}
        alt={title}
        className="w-full rounded-lg border-2 border-primary-600"
      />

      <p className="font-bad-script text-2xl">{title}</p>

      <p>{description}</p>
    </div>
  );
};

const MissionAndVision = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto mb-10 flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pt-10 lg:py-10">
      <SectionTitle>Нашата мисија и визија</SectionTitle>

      {children}
    </section>
  );
};

interface SingleHowToJoinUsProps {
  howToJoinUs: HowToJoinUs;
}

const SingleHowToJoinUs = ({ howToJoinUs }: SingleHowToJoinUsProps) => {
  const { image, title, description } = howToJoinUs;

  return (
    <div className="flex max-w-4xl flex-col items-center gap-4 lg:flex-row lg:gap-8">
      <Image
        className="shrink-0"
        src={image}
        width={120}
        height={70}
        alt={title}
      />
      <div className="flex flex-col items-center gap-2 lg:items-start">
        <p className="text-lg font-medium lg:text-xl">{title}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

const HowToJoinUs = () => {
  return (
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pb-10">
      <SectionTitle>Како да станете гурман?</SectionTitle>

      <div className="grid grid-cols-1 gap-6 lg:gap-12">
        {howToJoinUs.map((howToJoinUs, index) => (
          <SingleHowToJoinUs howToJoinUs={howToJoinUs} key={index} />
        ))}
      </div>
    </section>
  );
};

const FrequentlyAskedQuestions = () => {
  return (
    <section className="py-10">
      <div className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8">
        <SectionTitle>Често поставувани прашања</SectionTitle>

        <div className="w-full max-w-6xl">
          {frequentlyAskedQuestions.map((question, index) => (
            <Disclosure as="div" key={question.id}>
              {({ open }) => (
                <div className="rounded-lg border border-primary-600">
                  <Disclosure.Button
                    className={`flex w-full items-center justify-between rounded-lg p-4`}
                  >
                    <span className="font-medium lg:text-lg">
                      {question.question}
                    </span>
                    <ChevronDownIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-4 w-4 text-primary-600 lg:h-5 lg:w-5`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pb-4 text-gray-500">
                    {question.answer}
                  </Disclosure.Panel>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </div>
    </section>
  );
};

interface Props {
  cooks: Cook[];
}

const HowItFunctionsFoodies: NextPage<Props> = ({ cooks }) => {
  const cooksToDisplay = cooks.filter((cook) => cook.rating === 5).slice(0, 3);

  return (
    <>
      <Head>
        <title>Како функционира - Гурмани</title>
      </Head>

      <HeroHowItFunctions />

      <MissionAndVision>
        <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row lg:gap-10">
          {missionAndVision.map((item, index) => (
            <BorderedImageWithText
              title={item.title}
              image={item.image}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </MissionAndVision>

      <HowToJoinUs />

      <section className="mx-auto mb-8 flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8">
        <SectionTitle>Запознајте ги нашите готвачи</SectionTitle>

        <div className="grid w-full grid-cols-1 gap-10 lg:w-auto lg:grid-cols-3">
          {cooksToDisplay.map((cook) => (
            <CookCard cook={cook} key={cook.id} />
          ))}
        </div>
      </section>

      <section className="mx-auto flex w-11/12 max-w-2xl flex-col justify-center gap-5 py-10 text-center">
        <p className="font-bad-script text-3xl lg:text-4xl">
          Ви благодариме и добредојдовте!
        </p>

        <p>
          Ви посакуваме уживање во храната од нашите готвачи и споделување убави
          моменти во соседството!
        </p>

        <div className="flex justify-center">
          <Button href="/sign-up">Регистрирајте се</Button>
        </div>
      </section>

      <FrequentlyAskedQuestions />
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

export default HowItFunctionsFoodies;
