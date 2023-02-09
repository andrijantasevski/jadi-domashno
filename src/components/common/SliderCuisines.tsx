import { useEffect, useState, useRef } from "react";
import { useRouter } from "next/router";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import {
  AsianFoodIcon,
  BurgerIcon,
  CheeseIcon,
  ChevronRight,
  ItalianFoodIcon,
  PizzaIcon,
  SaladIcon,
  VeganFoodIcon,
} from "@/components/icons";

interface Cuisine {
  id: number;
  label: string;
  value: string;
  icon: JSX.Element;
}

const cuisines = [
  {
    id: 1,
    label: "Вегетаријанска",
    value: "vegetarian",
    icon: <CheeseIcon className="h-6 w-6 shrink-0 text-primary-600" />,
  },
  {
    id: 2,
    label: "Веганска",
    value: "vegan",
    icon: <VeganFoodIcon className="h-6 w-6 shrink-0 text-primary-600" />,
  },
  {
    id: 3,
    label: "Азијска",
    value: "asian",
    icon: <AsianFoodIcon className="h-6 w-6 shrink-0 text-primary-600" />,
  },
  {
    id: 4,
    label: "Бургери",
    value: "burger",
    icon: <BurgerIcon className="h-6 w-6 shrink-0 text-primary-600" />,
  },
  {
    id: 5,
    label: "Италијанска",
    value: "italian",
    icon: <ItalianFoodIcon className="h-6 w-6 shrink-0 text-primary-600" />,
  },
  {
    id: 6,
    label: "Салати",
    value: "salad",
    icon: <SaladIcon className="h-6 w-6 shrink-0 text-primary-600" />,
  },
  {
    id: 7,
    label: "Пици",
    value: "pizza",
    icon: <PizzaIcon className="h-6 w-6 shrink-0 text-primary-600" />,
  },
];

interface SingleFoodCategoryProps {
  cuisine: Cuisine;
  handleSearchByCategory: (
    cuisine: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => void;
  activeCuisine: number;
}

const SingleFoodCategory = ({
  cuisine,
  handleSearchByCategory,
  activeCuisine,
}: SingleFoodCategoryProps) => {
  const { label, id, icon, value } = cuisine;

  return (
    <SplideSlide>
      <div
        onClick={(event) => handleSearchByCategory(value, event)}
        className="group hidden h-full cursor-pointer items-center justify-center gap-2 rounded-lg border-b-2 border-b-primary-600 bg-gray-50 p-4 shadow-md transition-colors hover:text-primary-600 lg:flex"
      >
        {icon}
        <p className={`${activeCuisine === id ? "text-primary-600" : ""}`}>
          {label}
        </p>
      </div>
    </SplideSlide>
  );
};

const SliderFoodCategories = () => {
  const router = useRouter();
  const [activeCuisine, setActiveCuisine] = useState(0);
  const splideRef = useRef<Splide>(null);

  const findActiveCuisineId = (cusine: string) => {
    const activeCuisine = cuisines.find((cuisine) => cuisine.value === cusine);

    return activeCuisine ? activeCuisine.id : 0;
  };

  useEffect(() => {
    const cuisineId = findActiveCuisineId(router.query.cuisine as string);

    if (splideRef.current) {
      splideRef.current.forceUpdate();
      splideRef.current.go(cuisineId - 1);
    }

    if (router.query.cuisine) {
      setActiveCuisine(cuisineId);
    } else {
      setActiveCuisine(0);
    }
  }, [router.query.cuisine]);

  const handleSearchByCategory = (
    cuisine: string,
    event: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    event.preventDefault();
    router.push({
      pathname: "/menu",
      query: { ...router.query, cuisine: cuisine },
    });
  };

  return (
    <Splide
      ref={splideRef}
      hasTrack={false}
      options={{
        pagination: false,
        perPage: 2,
        gap: "2rem",
        mediaQuery: "min",
        breakpoints: {
          1024: {
            perPage: 4,
          },
        },
      }}
      aria-label="Избери јадења по категории"
    >
      <SplideTrack>
        {cuisines.map((cuisine) => (
          <SingleFoodCategory
            key={cuisine.id}
            cuisine={cuisine}
            activeCuisine={activeCuisine}
            handleSearchByCategory={handleSearchByCategory}
          />
        ))}
      </SplideTrack>

      <div className="splide__arrows hidden lg:block">
        <button className="splide__arrow splide__arrow--prev">
          <ChevronRight className="h-6 w-6 text-primary-600" />
        </button>
        <button className="splide__arrow splide__arrow--next">
          <ChevronRight className="h-6 w-6 text-primary-600" />
        </button>
      </div>
    </Splide>
  );
};

export default SliderFoodCategories;
