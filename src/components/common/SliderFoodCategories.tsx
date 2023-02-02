import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import { ChevronRight, PizzaIcon } from "@/components/icons";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const foodCategories = [
  {
    id: 1,
    foodCategoryLabel: "Домашни јадења",
  },
  {
    id: 2,
    foodCategoryLabel: "Чорби",
  },
  {
    id: 3,
    foodCategoryLabel: "Пици",
  },
  {
    id: 4,
    foodCategoryLabel: "Веганска",
  },
  {
    id: 5,
    foodCategoryLabel: "Оброк",
  },
  {
    id: 6,
    foodCategoryLabel: "Салати",
  },
];

interface FoodCategory {
  id: number;
  foodCategoryLabel: string;
}

interface SingleFoodCategoryProps {
  foodCategory: FoodCategory;
  handleSearchByCategory: (id: number) => void;
  activeFoodCategory: number;
}

const SingleFoodCategory = ({
  foodCategory,
  handleSearchByCategory,
  activeFoodCategory,
}: SingleFoodCategoryProps) => {
  const { foodCategoryLabel, id } = foodCategory;
  return (
    <SplideSlide>
      <div
        onClick={() => handleSearchByCategory(id)}
        className="hidden h-full cursor-pointer items-center justify-center gap-2 p-4 text-lg transition-colors lg:flex"
      >
        <PizzaIcon className="h-6 w-6 shrink-0 text-primary-600" />
        <p
          className={`hover:text-primary-600 ${
            activeFoodCategory === id ? "text-primary-600" : ""
          }`}
        >
          {foodCategoryLabel}
        </p>
      </div>
    </SplideSlide>
  );
};

const SliderFoodCategories = () => {
  const router = useRouter();
  const [activeFoodCategory, setActiveFoodCategory] = useState(0);

  useEffect(() => {
    if (router.query.foodCategory) {
      setActiveFoodCategory(Number(router.query.foodCategory));
    } else {
      setActiveFoodCategory(0);
    }
  }, [router.query]);

  const handleSearchByCategory = (id: number) => {
    router.push({
      pathname: "/menu",
      query: { foodCategory: id },
    });
  };

  return (
    <Splide
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
        {foodCategories.map((foodCategory) => (
          <SingleFoodCategory
            key={foodCategory.id}
            foodCategory={foodCategory}
            activeFoodCategory={activeFoodCategory}
            handleSearchByCategory={handleSearchByCategory}
          />
        ))}
      </SplideTrack>

      <div className="splide__arrows food-category-buttons hidden lg:block">
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