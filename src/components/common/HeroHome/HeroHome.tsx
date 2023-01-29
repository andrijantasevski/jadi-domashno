import Image from "next/image";
import dynamic from "next/dynamic";
import SectionTitle from "@components/ui/SectionTitle";
const SearchCitiesComboBox = dynamic(() => import("./SearchCitiesComboBox"));

const HeroHome = () => {
  return (
    <section className="mx-auto flex w-11/12 items-center justify-center gap-10 py-20">
      <div className="flex flex-col items-center gap-6">
        <div className="flex items-center gap-4">
          <Image
            priority
            src="/assets/logo-jadi-domashno-bez-tekst.svg"
            width="70"
            height="70"
            alt="Јади домашно"
            className="lg:w-18 xl:20 w-14"
          />
          <h1 className="text-3xl font-bold text-primary-600 lg:text-4xl xl:text-5xl">
            Јади домашно
          </h1>
        </div>

        <SectionTitle>Вкусот на вашето соседство</SectionTitle>

        <SearchCitiesComboBox />
      </div>

      <div className="hidden lg:block">
        <Image
          priority
          src="/assets/tavche-gravche.png"
          alt="Тавче гравче"
          width="600"
          height="300"
        />
      </div>
    </section>
  );
};

export default HeroHome;
