// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import path from "path";
import { promises as fs } from "fs";
import { Meal } from "@components/common/MenuCard";
const MEALS_FILE_PATH = path.join(process.cwd(), "data", "meals.json");

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "GET") {
    res.status(405).json({ message: "Method not allowed" });
    return;
  }

  let meals: Meal[] = [];

  try {
    const mealsJSON = await fs.readFile(MEALS_FILE_PATH, "utf-8");

    meals = JSON.parse(mealsJSON);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Could not find file or parse JSON data." });
    return;
  }

  const {
    city,
    rating,
    cuisine,
    sortBy,
    availability,
    delivery,
    price,
    allergens,
    currentDay,
    limit,
    page,
  } = req.query;

  const allergensArray = allergens?.toString().split(",");

  const mealsFiltered = meals.filter((meal) => {
    const currentDayCondition = currentDay
      ? Number(currentDay as string) === meal.day_available
      : true;

    const cuisineCondition = cuisine
      ? meal.cuisine.value === cuisine.toString()
      : true;

    const cityCondition = city ? meal.city.value === city : true;

    const availabilityCondition = availability
      ? meal.availability.value === availability
      : true;

    const priceCondition = price ? meal.price <= Number(price) : true;

    const allergensCondition = allergens
      ? allergensArray?.every((allergen) => {
          const allergenValues = meal.allergens.map(
            (allergen) => allergen.value
          );

          return allergenValues.includes(allergen);
        })
      : true;

    const ratingCondition = rating ? meal.rating === Number(rating) : true;

    const deliveryCondition = delivery
      ? meal.delivery_type.value === delivery
      : true;

    const areAllConditionsMet =
      cityCondition &&
      ratingCondition &&
      availabilityCondition &&
      deliveryCondition &&
      priceCondition &&
      allergensCondition &&
      currentDayCondition &&
      cuisineCondition;

    return areAllConditionsMet;
  });

  const mealsSorted =
    typeof sortBy === "string"
      ? [...meals].sort((a, b) => {
          if (sortBy === "highestRated") {
            return b.rating - a.rating;
          }

          if (sortBy === "lowestRated") {
            return a.rating - b.rating;
          }

          if (sortBy === "newest") {
            return (
              new Date(b.date_created).valueOf() -
              new Date(a.date_created).valueOf()
            );
          }

          if (sortBy === "oldest") {
            return (
              new Date(a.date_created).valueOf() -
              new Date(b.date_created).valueOf()
            );
          }

          if (sortBy === "highestPrice") {
            return b.price - a.price;
          }

          if (sortBy === "lowestPrice") {
            return a.price - b.price;
          }

          return 0;
        })
      : mealsFiltered;

  const mealsLimited =
    limit && !page ? mealsSorted.slice(0, Number(limit)) : mealsSorted;

  const startIndex = (Number(page) - 1) * Number(limit);
  const endIndex = Number(page) * Number(limit);

  const mealsPaginated = page
    ? mealsLimited.slice(startIndex, endIndex)
    : mealsLimited;

  res.status(200).json(mealsPaginated);
}
