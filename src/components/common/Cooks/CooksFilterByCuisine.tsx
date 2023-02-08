import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { QueriesCooks } from "@/pages/cooks";

interface Cuisine {
  id: number;
  label: string;
  value: string;
  checked: boolean;
}

const cuisines: Cuisine[] = [
  { id: 1, label: "Вегетаријанска", value: "vegetarian", checked: false },
  {
    id: 2,
    label: "Италијанска",
    value: "italian",
    checked: false,
  },
  {
    id: 3,
    label: "Салати",
    value: "salad",
    checked: false,
  },
  {
    id: 4,
    label: "Веганска",
    value: "vegan",
    checked: false,
  },
  {
    id: 5,
    label: "Азијска",
    value: "asian",
    checked: false,
  },
  {
    id: 6,
    label: "Бургери",
    value: "burger",
    checked: false,
  },
];

interface SingleCuisineProps {
  cuisine: Cuisine;
  toggleCuisine: (cuisine: Cuisine) => void;
}

const SingleAllergen = ({ cuisine, toggleCuisine }: SingleCuisineProps) => {
  const { label } = cuisine;
  return (
    <div
      onClick={() => toggleCuisine(cuisine)}
      className={`flex cursor-pointer items-center justify-center rounded-lg border-b-2 border-primary-600 bg-gray-50 p-1 text-sm shadow-md transition-colors hover:text-primary-600 ${
        cuisine.checked ? "text-primary-600" : ""
      }`}
    >
      {label}
    </div>
  );
};

interface Props {
  queriesCooks: QueriesCooks;
}

const CooksFilterByCuisine = ({ queriesCooks }: Props) => {
  const router = useRouter();

  const cuisinesDefaultValues = cuisines.map((cuisine) =>
    queriesCooks.cuisines?.includes(cuisine.value)
      ? { ...cuisine, checked: true }
      : cuisine
  );
  const [selectedCuisines, setSelectedCuisines] = useState<Cuisine[]>(
    cuisinesDefaultValues
  );

  const toggleCuisine = (cuisine: Cuisine) => {
    const newCuisines = selectedCuisines.map((prevCuisine) =>
      prevCuisine.id === cuisine.id
        ? { ...prevCuisine, checked: !prevCuisine.checked }
        : prevCuisine
    );
    setSelectedCuisines(newCuisines);
  };

  useEffect(() => {
    const selectedCuisinesValues = selectedCuisines
      .filter((cuisine) => cuisine.checked)
      .map((cuisine) => cuisine.value);

    const areAnyCuisinesSelected = selectedCuisinesValues.length > 0;

    if (!areAnyCuisinesSelected) {
      delete router.query.cuisines;
    }

    router.push({
      pathname: "/cooks",
      query: {
        ...router.query,
        ...(areAnyCuisinesSelected && {
          cuisines: selectedCuisinesValues.join(","),
        }),
      },
    });
  }, [selectedCuisines]);

  useEffect(() => {
    if (!router.query.cuisines) {
      setSelectedCuisines(cuisines);
    }
  }, [router.query]);

  return (
    <div className="grid grid-cols-1 gap-2 px-1">
      <p>Вид на кујна:</p>

      <div className="grid grid-cols-2 gap-2.5">
        {selectedCuisines.map((cuisine) => (
          <SingleAllergen
            key={cuisine.id}
            cuisine={cuisine}
            toggleCuisine={toggleCuisine}
          />
        ))}
      </div>
    </div>
  );
};

export default CooksFilterByCuisine;
