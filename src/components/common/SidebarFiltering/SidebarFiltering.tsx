import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FilterByLocationComboBox from "./FilterByLocationComboBox";
import { RadioGroup } from "@headlessui/react";

interface SingleAvailabity {
  id: number;
  label: string;
  value: string;
}

const availability = [
  {
    id: 1,
    label: "Достапно веднаш",
    value: "immediately",
  },
  {
    id: 2,
    label: "Достапно утре",
    value: "tomorrow",
  },
  {
    id: 3,
    label: "Достапно по порачка",
    value: "order",
  },
];

interface SingleAvailabilityOptionProps {
  singleAvailability: SingleAvailabity;
  handleAvailabilityChange: (value: string) => void;
}

const SingleAvailabilityOption = ({
  singleAvailability,
  handleAvailabilityChange,
}: SingleAvailabilityOptionProps) => {
  const { label, value } = singleAvailability;
  return (
    <>
      <RadioGroup.Label className="sr-only font-medium text-gray-900">
        {label}
      </RadioGroup.Label>
      <RadioGroup.Option as="div" value={value}>
        {({ checked }) => (
          <div
            className="flex cursor-pointer items-center justify-between px-1"
            onClick={() => handleAvailabilityChange(value)}
          >
            <p>{label}</p>

            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400">
              {checked && (
                <div className="h-4 w-4 rounded-full bg-primary-600" />
              )}
            </div>
          </div>
        )}
      </RadioGroup.Option>
    </>
  );
};

const FilterByAvailabilityRadioGroup = () => {
  const router = useRouter();
  const [selectedAvailability, setSelectedAvailability] = useState("");

  // useEffect(() => {
  //   if (router.isReady) {
  //     router.push({
  //       pathname: "/menu",
  //       query: { ...router.query, availability: selectedAvailability },
  //     });
  //   }
  // }, [selectedAvailability]);

  useEffect(() => {
    if (router.query.availability) {
      setSelectedAvailability(router.query.availability as string);
    } else {
      setSelectedAvailability("immediately");
    }
  }, [router.query]);

  const handleAvailabilityChange = (value: string) => {
    router.push({
      pathname: "/menu",
      query: { ...router.query, availability: value },
    });
  };

  return (
    <RadioGroup
      as="div"
      value={selectedAvailability}
      className="flex flex-col gap-3"
      onChange={setSelectedAvailability}
    >
      {availability.map((singleAvailability) => (
        <SingleAvailabilityOption
          key={singleAvailability.id}
          singleAvailability={singleAvailability}
          handleAvailabilityChange={handleAvailabilityChange}
        />
      ))}
    </RadioGroup>
  );
};

const SidebarFiltering = () => {
  return (
    <aside className="w-80 shrink-0 px-4 xl:w-96">
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-gray-50 p-5 shadow-md">
        <FilterByLocationComboBox />
        <FilterByAvailabilityRadioGroup />
      </div>
    </aside>
  );
};

export default SidebarFiltering;
