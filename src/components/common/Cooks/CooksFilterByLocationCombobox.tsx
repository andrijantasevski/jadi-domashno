import { Combobox, Transition } from "@headlessui/react";
import { useRouter } from "next/router";
import { useState, Fragment, useEffect } from "react";
import {
  CheckMarkIcon,
  ChevronUpDownIcon,
  LocationIcon,
} from "@components/icons";
import { QueriesCooks } from "@/pages/cooks";

interface City {
  id: number;
  label: string;
  value: string;
}

const cities = [
  { id: 1, label: "Скопје", value: "skopje" },
  { id: 2, label: "Битола", value: "bitola" },
  { id: 3, label: "Куманово", value: "kumanovo" },
  { id: 4, label: "Охрид", value: "ohrid" },
  { id: 5, label: "Прилеп", value: "prilep" },
  { id: 6, label: "Тетово", value: "tetovo" },
  { id: 7, label: "Струга", value: "struga" },
  { id: 8, label: "Кавадарци", value: "kavadarci" },
];

interface Props {
  queriesCooks: QueriesCooks;
  closeFilteringMenu?: () => void;
  isFilteringMenuOpen?: boolean;
}

const CooksFilterByLocationCombobox = ({ queriesCooks }: Props) => {
  const cityDefaultValue = (cityQuery: string | undefined) => {
    return cities.find((city) => city.value === cityQuery) ?? ({} as City);
  };

  const router = useRouter();
  const [selectedCity, setSelectedCity] = useState(
    cityDefaultValue(queriesCooks.city)
  );

  const [cityQuery, setCityQuery] = useState("");

  const filteredCities =
    cityQuery === ""
      ? cities
      : cities.filter(
          (city) =>
            city.value.toLowerCase().includes(cityQuery.toLowerCase()) ||
            city.label.toLowerCase().includes(cityQuery.toLowerCase())
        );

  useEffect(() => {
    if (Object.keys(selectedCity).length !== 0) {
      router.push(
        {
          pathname: "/cooks",
          query: { ...router.query, city: selectedCity.value },
        },
        undefined,
        { scroll: false }
      );
    }
  }, [selectedCity]);

  useEffect(() => {
    if (!router.query.city) {
      setSelectedCity({} as City);
    }
  }, [router.query]);

  return (
    <Combobox
      value={selectedCity}
      onChange={setSelectedCity}
      as="div"
      className="relative w-full"
      name="city"
    >
      <div className="flex cursor-pointer justify-between rounded-lg bg-gray-50 py-2 px-3 shadow-md">
        <div className="flex w-full items-center gap-1">
          <LocationIcon className="h-5 w-5 text-primary-600" />
          <Combobox.Input
            displayValue={(city: City) => (city ? city.label : "")}
            placeholder="Внесете град"
            className="w-full bg-transparent font-normal focus:outline-none"
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
          className="absolute z-50 mt-2 max-h-56 w-full overflow-y-auto rounded-lg bg-gray-50 py-2 shadow-md"
        >
          {filteredCities.length > 0 ? (
            filteredCities.map((city) => (
              <Combobox.Option
                className={({ active }) =>
                  `flex cursor-pointer list-none items-center gap-2 px-4 py-2 hover:bg-primary-600 hover:text-primary-50 ${
                    active ? "bg-primary-600 text-primary-50" : "text-gray-900"
                  }`
                }
                key={city.id}
                value={city}
              >
                {({ selected, active }) => (
                  <>
                    <CheckMarkIcon
                      className={`${
                        selected ? "text-primary-600" : "text-transparent"
                      } ${active ? "text-primary-50" : ""} h-4 w-4`}
                    />

                    {city.label}
                  </>
                )}
              </Combobox.Option>
            ))
          ) : (
            <p className="px-4 py-2">Нема резултати.</p>
          )}
        </Combobox.Options>
      </Transition>
    </Combobox>
  );
};

export default CooksFilterByLocationCombobox;
