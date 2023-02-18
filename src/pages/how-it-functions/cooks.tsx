import SectionTitle from "@/components/ui/SectionTitle";
import { NextPage } from "next";
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

const HeroHowItFunctions = () => {
  const router = useRouter();

  return (
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 py-10">
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
          className={`block w-36 rounded-full px-8 py-3 transition-colors lg:px-10 lg:py-6 ${
            router.pathname === "/how-it-functions/cooks"
              ? "bg-primary-600 text-primary-50"
              : "hover:text-primary-600"
          }`}
        >
          Готвачи
        </Link>

        <Link
          href="/how-it-functions/foodies"
          className={`block w-36 rounded-full px-8 py-3 transition-colors lg:px-10 lg:py-6 ${
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
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pb-10">
      <SectionTitle>Зошто да станете готвач?</SectionTitle>

      {children}
    </section>
  );
};

const SingleCriterion = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Image
          src="/assets/how-it-functions/be-your-own-chef.png"
          alt="title"
          width={150}
          height={150}
          className="rounded-lg border-2 border-primary-600"
        />
        <p className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-lg bg-primary-600 text-primary-50">
          1
        </p>
      </div>

      <p>Вашата кујна треба да биде чиста и уредна!</p>
    </div>
  );
};

const CriteriaToBecomeACook = () => {
  return (
    <section className="mx-auto flex w-11/12 max-w-screen-2xl flex-col items-center justify-center gap-8 pb-10">
      <SectionTitle>Кои критериуми треба да ги исполнувате?</SectionTitle>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <SingleCriterion />
        <SingleCriterion />
        <SingleCriterion />
        <SingleCriterion />
      </div>
    </section>
  );
};

const HowItFunctionsCooks: NextPage = () => {
  return (
    <div>
      <HeroHowItFunctions />
      <WhyBecomeACook>
        <div className="grid w-full grid-cols-1 gap-10 lg:grid-cols-3">
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
    </div>
  );
};

export default HowItFunctionsCooks;
