import { Meal } from "@/components/common/MenuCard";
import fetchMenu from "./fetchMenu";

export interface MinMaxPrices {
  minPrice: number;
  maxPrice: number;
}

export default async function getMinMaxPrice() {
  const meals: Meal[] = await fetchMenu();

  const minPrice = Math.min(...meals.map((meal) => meal.price));
  const maxPrice = Math.max(...meals.map((meal) => meal.price));

  return { minPrice, maxPrice };
}
