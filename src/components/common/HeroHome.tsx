import Image from "next/image";
import SectionTitle from "../ui/SectionTitle";
import { Combobox, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import { CheckMarkIcon, ChevronUpDownIcon, LocationIcon } from "../icons";
import Button from "../ui/Button";

const SearchCitiesComboBox = () => {
  const cities = [
    { id: 1, name: "Скопје", latin: "Skopje" },
    { id: 2, name: "Битола", latin: "Bitola" },
    { id: 3, name: "Куманово", latin: "Kumanovo" },
    { id: 4, name: "Струмица", latin: "Strumica" },
    { id: 5, name: "Кочани", latin: "Kochani" },
    { id: 6, name: "Кавадарци", latin: "Kavadarci" },
  ];

  const [selectedCity, setSelectedCity] = useState("");
  const [cityQuery, setCityQuery] = useState("");

  const filteredCities =
    cityQuery === ""
      ? cities
      : cities.filter(
          (city) =>
            city.latin.toLowerCase().includes(cityQuery.toLowerCase()) ||
            city.name.toLowerCase().includes(cityQuery.toLowerCase())
        );

  return (
    <Combobox
      value={selectedCity}
      onChange={setSelectedCity}
      as="div"
      className="relative"
    >
      <div className="flex rounded-lg border bg-gray-200 py-2 px-3">
        <div className="flex items-center gap-1">
          <LocationIcon className="h-5 w-5 text-primary-600" />
          <Combobox.Input
            placeholder="Внесете град"
            className="bg-transparent font-normal focus:outline-none"
            onChange={(e) => setCityQuery(e.target.value)}
          />
        </div>
        <Combobox.Button
          title="Погледете ги градовите"
          aria-label="Погледнете ги градовите"
        >
          <span className="sr-only">Погледете ги градовите</span>
          <ChevronUpDownIcon className="h-5 w-5 text-primary-600" />
        </Combobox.Button>
      </div>
      <Transition
        as={Fragment}
        leave="transition ease-in duration-100"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        afterLeave={() => setCityQuery("")}
      >
        <Combobox.Options
          as="div"
          className="absolute mt-2 max-h-56 w-full overflow-y-auto rounded-lg bg-gray-200 py-2"
        >
          {filteredCities.map((city) => (
            <Combobox.Option
              className={({ active }) =>
                `flex cursor-pointer list-none items-center gap-2 px-4 py-2 hover:bg-primary-600 hover:text-primary-50 ${
                  active ? "bg-primary-600 text-primary-50" : "text-gray-900"
                }`
              }
              key={city.id}
              value={city.name}
            >
              <CheckMarkIcon className="h-4 w-4" />
              {city.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};

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

        <SectionTitle>Вкусот на твоето соседство</SectionTitle>

        <div className="flex flex-col items-center gap-4 lg:flex-row">
          <SearchCitiesComboBox />
          <Button>Пребарајте</Button>
        </div>
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
