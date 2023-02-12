import SectionTitle from "@/components/ui/SectionTitle";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const HeroHowItFunctions = () => {
  const router = useRouter();

  return (
    <section className="mx-auto flex w-full max-w-screen-2xl flex-col items-center justify-center gap-8 py-10">
      <Image
        src="/assets/logo-jadi-domashno-bez-tekst.svg"
        width={70}
        height={70}
        alt="Лого"
      />

      <SectionTitle>Како функционира?</SectionTitle>

      <div className="flex rounded-full bg-gray-100 shadow-md">
        <Link
          href="/how-it-functions/cooks"
          className={`block w-36 rounded-full px-10 py-6 transition-colors ${
            router.pathname === "/how-it-functions/cooks"
              ? "bg-primary-600 text-primary-50"
              : "hover:text-primary-600"
          }`}
        >
          Готвачи
        </Link>

        <Link
          href="/how-it-functions/cooks"
          className={`block w-36 rounded-full px-10 py-6 transition-colors ${
            router.pathname === "/how-it-functions/foodies"
              ? "bg-primary-600 text-primary-50"
              : "hover:text-primary-600"
          }`}
        >
          Гурмани
        </Link>
      </div>
    </section>
  );
};

const HowItFunctionsFoodies: NextPage = () => {
  return (
    <div>
      <HeroHowItFunctions />
    </div>
  );
};

export default HowItFunctionsFoodies;
