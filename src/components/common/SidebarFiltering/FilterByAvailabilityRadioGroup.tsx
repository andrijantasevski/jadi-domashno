import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { RadioGroup } from "@headlessui/react";
import { Queries } from "@/pages/menu";

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
            className="group flex cursor-pointer items-center justify-between px-1 transition-colors hover:text-primary-600"
            onClick={() => handleAvailabilityChange(value)}
          >
            <p>{label}</p>

            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-gray-400">
              <div
                className={`h-4 w-4 rounded-full transition-colors group-hover:bg-primary-600 ${
                  checked ? "bg-primary-600" : "bg-transparent"
                }`}
              />
            </div>
          </div>
        )}
      </RadioGroup.Option>
    </>
  );
};

const FilterByAvailabilityRadioGroup = ({ queries }: { queries: Queries }) => {
  const router = useRouter();
  const [selectedAvailability, setSelectedAvailability] = useState(
    queries?.availability ?? "immediately"
  );

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

export default FilterByAvailabilityRadioGroup;
