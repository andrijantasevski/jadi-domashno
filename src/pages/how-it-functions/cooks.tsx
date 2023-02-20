import SatisfiedCustomers from "@/components/common/SatisfiedCustomers";
import { ChevronDownIcon, ChevronUpDownIcon } from "@/components/icons";
import Button from "@/components/ui/Button";
import SectionTitle from "@/components/ui/SectionTitle";
import { Disclosure } from "@headlessui/react";
import { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const whyBecomeACook = [
  {
    image: "/assets/how-it-functions/earn-honestly.png",
    title: "Заработете чесно",
    description:
      "Сосема е бесплатна за аплицирање. Многу шефови заработуваат околу 5000 денари неделно.",
  },
  {
    image: "/assets/how-it-functions/be-your-own-chef.png",
    title: "Бидете свој готвач",
    description:
      "Дизајнирајте сопствено мени, поставете свои цени и работете кога сакате. Ќе ви помогнеме со плаќања, логистика и поддршка на клиентите.",
  },
  {
    image: "/assets/how-it-functions/serve-happy-clients.png",
    title: "Служете среќни клиенти",
    description:
      "Добијте можност да ги зготвите вашите омилени рецепти и со тоа да усреќите гурмани кои секогаш сакаат да пробаат нешто ново.",
  },
];

interface Criterion {
  id: number;
  image: string;
  title: string;
}

const criteriaToBecomeACook = [
  {
    id: 1,
    image: "/assets/how-it-functions/criterion-1.jpg",
    title: "Вашата кујна треба да биде чиста и уредна!",
  },
  {
    id: 2,
    image: "/assets/how-it-functions/criterion-2.jpg",
    title:
      "Намирниците со кои ја готвите храната треба да се истите што се наведени во вашето мени!",
  },
  {
    id: 3,
    image: "/assets/how-it-functions/criterion-3.jpg",
    title:
      "Секогаш треба да ги измиете рацете темелно, пред да започнете со подготвување оброци!",
  },
  {
    id: 4,
    image: "/assets/how-it-functions/criterion-4.jpg",
    title:
      "Намирниците треба да се чуваат во соодветни услови! Проверувајте го редовно рокот пред да почнете да готвите.",
  },
  {
    id: 5,
    image: "/assets/how-it-functions/criterion-5.jpg",
    title:
      "Нека вашите миленичиња ве почекаат надвор од кујната. Некои клиенти не сакаат кога се готви во присуство на домашно милениче!",
  },
  {
    id: 6,
    image: "/assets/how-it-functions/criterion-6.jpg",
    title:
      "Бидете секогаш професионални и пријателски насочени кон клиентите кон нарачуваат храна од вас!",
  },
  {
    id: 7,
    image: "/assets/how-it-functions/criterion-7.jpg",
    title:
      "Ние сме едно големо семејство! Секогаш обидете се несогласувањата да ги решите директно со вашите клиенти. Сослушајте ги нивните критики - тоа ќе ве направи подобар готвач!",
  },
];

interface HowToBecomeACook {
  id: number;
  title: string;
  description: string;
  image: string;
}

const howToBecomeACook = [
  {
    id: 1,
    title: "Добијте одобрение за готвење",
    description:
      "Регистрирајте се. Прочитајте и пополнете регулативи за безбедност на храната и изберете го вашето мени со јадења.",
    image: "/assets/how-it-functions/how-to-become-a-cook-1.png",
  },
  {
    id: 2,
    title: "Изберете го вашиот распоред",
    description:
      "Изберете ги деновите што сакате да ги готвите. Малку или колку што сакате.",
    image: "/assets/how-it-functions/how-to-become-a-cook-2.png",
  },
  {
    id: 3,
    title: "Подгответе ги вашите нарачки",
    description:
      "Клиентите можат да почнат да нарачуваат од вас на платформата. Освен за нарачки спремни веднаш за во текот на денот, тие ќе нарачаат барем еден ден однапред за да имате доволно време да ги набавите состојките и да ги подготвите нивните јадења.",
    image: "/assets/how-it-functions/how-to-become-a-cook-3.png",
  },
  {
    id: 4,
    title: "Подгответе ги за испорака",
    description:
      "Откако ќе ја подготвите нарачката, известете го клиентот дека истата е спремна за достава.",
    image: "/assets/how-it-functions/how-to-become-a-cook-4.png",
  },
  {
    id: 5,
    title: "Услужете ги вашите клиенти",
    description:
      "Ќе ви помогнеме да го идентификувате најдобриот достапен метод за испорака за вашите клиенти да можат безбедно и навреме да ја добијат храната.",
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

const WhyBecomeACook = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="mx-auto mb-10 flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pt-10 lg:py-10">
      <SectionTitle>Зошто да станете готвач?</SectionTitle>

      {children}
    </section>
  );
};

interface SingleCriterion {
  criterion: Criterion;
}

const SingleCriterion = ({ criterion }: SingleCriterion) => {
  const { image, title, id } = criterion;
  return (
    <div className="flex flex-col items-center gap-4 lg:flex-row lg:gap-6">
      <div className="relative shrink-0">
        <Image
          src={image}
          alt="title"
          width={250}
          height={150}
          className="rounded-lg border-2 border-primary-600"
        />
        <p className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 text-primary-50">
          {id}
        </p>
      </div>

      <p className="text-center lg:text-left">{title}</p>
    </div>
  );
};

const CriteriaToBecomeACook = () => {
  return (
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pb-10">
      <SectionTitle>Кои критериуми треба да ги исполнувате?</SectionTitle>

      <div className="grid w-full grid-cols-1 justify-between gap-6 lg:grid-cols-2 lg:gap-10">
        {criteriaToBecomeACook.map((criterion, index) => (
          <SingleCriterion key={index} criterion={criterion} />
        ))}
      </div>
    </section>
  );
};

interface SingleHowToBecomeACookProps {
  howToBecomeACook: HowToBecomeACook;
}

const SingleHowToBecomeACook = ({
  howToBecomeACook,
}: SingleHowToBecomeACookProps) => {
  const { image, title, description } = howToBecomeACook;

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

const HowToBecomeACook = () => {
  return (
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pb-10">
      <SectionTitle>Како да станете готвач?</SectionTitle>

      <div className="grid grid-cols-1 gap-6 lg:gap-12">
        {howToBecomeACook.map((howToBecome, index) => (
          <SingleHowToBecomeACook howToBecomeACook={howToBecome} key={index} />
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

const HowItFunctionsCooks: NextPage = () => {
  return (
    <>
      <Head>
        <title>Како функционира - Готвачи</title>
      </Head>

      <HeroHowItFunctions />

      <WhyBecomeACook>
        <div className="flex w-full flex-col items-start justify-between gap-6 md:flex-row lg:gap-10">
          {whyBecomeACook.map((item, index) => (
            <BorderedImageWithText
              title={item.title}
              image={item.image}
              description={item.description}
              key={index}
            />
          ))}
        </div>
      </WhyBecomeACook>

      <CriteriaToBecomeACook />

      <HowToBecomeACook />

      <div className="mx-auto flex w-11/12 max-w-screen-2xl justify-center">
        <SectionTitle>Што рекоа нашите гурмани?</SectionTitle>
      </div>
      <SatisfiedCustomers />

      <section className="mx-auto flex w-11/12 max-w-2xl flex-col justify-center gap-5 py-10 text-center">
        <p className="font-bad-script text-3xl lg:text-4xl">
          Ви благодариме и добредојдовте!
        </p>

        <p>
          Ви посакуваме успешна работа, многу готвење и споделување убави
          моменти со храната!
        </p>

        <div className="flex justify-center">
          <Button href="/sign-up">Регистрирајте се</Button>
        </div>
      </section>

      <FrequentlyAskedQuestions />
    </>
  );
};

export default HowItFunctionsCooks;
