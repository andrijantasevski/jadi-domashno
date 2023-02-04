import { Queries } from "@/pages/menu";
import FilterByLocationComboBox from "./FilterByLocationComboBox";
import FilterByAvailabilityRadioGroup from "./FilterByAvailabilityRadioGroup";
import FilterByPriceSlider from "./FilterByPriceSlider";
import { useState } from "react";

interface Allergen {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}

const allergens = [
  { id: 1, label: "Млеко", value: "milk", checked: false },
  {
    id: 2,
    label: "Јајца",
    value: "eggs",
    checked: false,
  },
  {
    id: 3,
    label: "Риба",
    value: "fish",
    checked: false,
  },
  {
    id: 4,
    label: "Глутен",
    value: "gluten",
    checked: false,
  },
  {
    id: 5,
    label: "Соја",
    value: "soy",
    checked: false,
  },
];

interface SingleAllergenProps {
  allergen: Allergen;
}

const SingleAllergen = ({ allergen }: SingleAllergenProps) => {
  const { label } = allergen;
  return (
    <div className="flex cursor-pointer items-center justify-center rounded-lg border-b-2 border-primary-600 bg-gray-50 p-1 text-sm shadow-md transition-colors hover:text-primary-600">
      {label}
    </div>
  );
};

const FilterByAllergens = () => {
  const [selectedAllergens, setSelectedAllergens] = useState<Allergen[]>([]);

  const handleAllergenClick = (allergen: Allergen) => {};

  return (
    <div className="grid grid-cols-1 gap-2 px-1">
      <p>Алергени:</p>

      <div className="grid grid-cols-3 gap-2.5">
        {allergens.map((allergen) => (
          <SingleAllergen key={allergen.id} allergen={allergen} />
        ))}
      </div>
    </div>
  );
};

interface Props {
  queries: Queries;
}

const SidebarFiltering = ({ queries }: Props) => {
  return (
    <aside className="w-80 shrink-0 px-4 xl:w-96">
      <div className="grid grid-cols-1 gap-6 rounded-lg bg-gray-50 p-5 shadow-md">
        <FilterByLocationComboBox queries={queries} />
        <FilterByAvailabilityRadioGroup queries={queries} />
        <FilterByPriceSlider queries={queries} />
        <FilterByAllergens />
      </div>
    </aside>
  );
};

export default SidebarFiltering;
