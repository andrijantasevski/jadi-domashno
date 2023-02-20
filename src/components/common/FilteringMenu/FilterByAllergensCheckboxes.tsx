import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Queries } from "@/pages/menu";

interface Allergen {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}

const allergens: Allergen[] = [
  { id: 1, label: "Јатки", value: "nuts", checked: false },
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
  {
    id: 6,
    label: "Лактоза",
    value: "lactose",
    checked: false,
  },
];

interface SingleAllergenProps {
  allergen: Allergen;
  toggleAllergen: (allergen: Allergen) => void;
}

const SingleAllergen = ({ allergen, toggleAllergen }: SingleAllergenProps) => {
  const { label } = allergen;
  return (
    <div
      onClick={() => toggleAllergen(allergen)}
      className={`flex cursor-pointer items-center justify-center rounded-lg border-b-2 border-primary-600 bg-gray-50 p-1 text-sm shadow-md transition-colors hover:text-primary-600 ${
        allergen.checked ? "text-primary-600" : ""
      }`}
    >
      {label}
    </div>
  );
};

interface Props {
  queries: Queries;
}

const FilterByAllergensCheckboxes = ({ queries }: Props) => {
  const router = useRouter();

  const allergensDefaultValues = allergens.map((allergen) =>
    queries.allergens?.includes(allergen.value)
      ? { ...allergen, checked: true }
      : allergen
  );
  const [selectedAllergens, setSelectedAllergens] = useState<Allergen[]>(
    allergensDefaultValues
  );

  const toggleAlergen = (allergen: Allergen) => {
    const newAllergens = selectedAllergens.map((prevAllergen) =>
      prevAllergen.id === allergen.id
        ? { ...prevAllergen, checked: !prevAllergen.checked }
        : prevAllergen
    );
    setSelectedAllergens(newAllergens);
  };

  useEffect(() => {
    const selectedAllergensValues = selectedAllergens
      .filter((allergen) => allergen.checked)
      .map((allergen) => allergen.value);

    const areAnyAllergensSelected = selectedAllergensValues.length > 0;

    if (!areAnyAllergensSelected) {
      delete router.query.allergens;
    }

    router.push({
      pathname: "/menu",
      query: {
        ...router.query,
        ...(areAnyAllergensSelected && {
          allergens: selectedAllergensValues.join(","),
        }),
      },
    });
  }, [selectedAllergens]);

  useEffect(() => {
    if (!router.query.allergens) {
      setSelectedAllergens(allergens);
    }
  }, [router.query.allergens]);

  return (
    <div className="grid grid-cols-1 gap-2 px-1">
      <p>Алергени:</p>

      <div className="grid grid-cols-3 gap-2.5">
        {selectedAllergens.map((allergen) => (
          <SingleAllergen
            key={allergen.id}
            allergen={allergen}
            toggleAllergen={toggleAlergen}
          />
        ))}
      </div>
    </div>
  );
};

export default FilterByAllergensCheckboxes;
