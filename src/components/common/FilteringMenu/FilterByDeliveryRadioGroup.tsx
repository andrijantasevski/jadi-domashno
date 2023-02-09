import { RadioGroup } from "@headlessui/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Queries } from "@/pages/menu";

interface DeliveryOption {
  id: number;
  label: string;
  value: string;
}

const deliveryOptions = [
  {
    id: 1,
    label: "Со достава",
    value: "delivery",
  },
  {
    id: 2,
    label: "Со подигање",
    value: "pickup",
  },
];

interface SingleDeliveryOptionProps {
  deliveryOption: DeliveryOption;
}

const SingleDeliveryOption = ({
  deliveryOption,
}: SingleDeliveryOptionProps) => {
  const { label, value } = deliveryOption;
  return (
    <>
      <RadioGroup.Label className="sr-only font-medium text-gray-900">
        {label}
      </RadioGroup.Label>
      <RadioGroup.Option as="div" value={value}>
        {({ checked }) => (
          <div className="group flex cursor-pointer items-center justify-between px-1 transition-colors hover:text-primary-600">
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

interface Props {
  queries: Queries;
}

const FilterByDeliveryRadioGroup = ({ queries }: Props) => {
  const deliveryDefaultValue = queries.delivery ? queries.delivery : "";
  const router = useRouter();

  const [selectedDeliveryOption, setSelectedDeliveryOption] =
    useState(deliveryDefaultValue);

  useEffect(() => {
    if (selectedDeliveryOption !== "") {
      router.push({
        pathname: "/menu",
        query: {
          ...router.query,
          delivery: selectedDeliveryOption,
        },
      });
    }
  }, [selectedDeliveryOption]);

  useEffect(() => {
    if (!router.query.delivery) {
      setSelectedDeliveryOption("");
    }
  }, [router.query.delivery]);

  return (
    <div>
      <RadioGroup
        value={selectedDeliveryOption}
        as="div"
        onChange={setSelectedDeliveryOption}
        className="flex flex-col gap-3"
      >
        {deliveryOptions.map((deliveryOption) => (
          <SingleDeliveryOption
            key={deliveryOption.id}
            deliveryOption={deliveryOption}
          />
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterByDeliveryRadioGroup;
